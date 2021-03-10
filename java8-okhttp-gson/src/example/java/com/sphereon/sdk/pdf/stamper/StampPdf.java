package com.sphereon.sdk.pdf.stamper;

import com.sphereon.sdk.pdf.stamper.api.ConfigApi;
import com.sphereon.sdk.pdf.stamper.api.JobsApi;
import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
import com.sphereon.sdk.pdf.stamper.handler.ApiException;
import com.sphereon.sdk.pdf.stamper.handler.Configuration;
import com.sphereon.sdk.pdf.stamper.model.BlockchainConfig;
import com.sphereon.sdk.pdf.stamper.model.BlockchainConfig.BlockchainAnchorsEnum;
import com.sphereon.sdk.pdf.stamper.model.CanvasComponent;
import com.sphereon.sdk.pdf.stamper.model.Connector;
import com.sphereon.sdk.pdf.stamper.model.Dimension;
import com.sphereon.sdk.pdf.stamper.model.HyperlinkComponent;
import com.sphereon.sdk.pdf.stamper.model.ImageComponent;
import com.sphereon.sdk.pdf.stamper.model.PdfStamperJobRequest;
import com.sphereon.sdk.pdf.stamper.model.PdfStamperJobResult;
import com.sphereon.sdk.pdf.stamper.model.Point;
import com.sphereon.sdk.pdf.stamper.model.StamperConfig;
import com.sphereon.sdk.pdf.stamper.model.StamperConfigResponse;
import com.sphereon.sdk.pdf.stamper.model.StreamLocation;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;

public class StampPdf {
    private static final String accessToken = "[YOUR ACCESS TOKEN]";
    private static final ConfigApi configApi = new ConfigApi();
    private static final JobsApi jobsApi = new JobsApi();

    public static void main(final String[] args) throws ApiException, InterruptedException, IOException {
        // Create/initialize a new PDF stamper configuration.
        initClient(accessToken);

        // Create a PDF stamper configuration.
        final String configId = createConfiguration();

        final File resource = new File(StampPdf.class.getResource("/logo2.png").getFile());
        final StreamLocation logoStreamLocation = configApi.uploadResource(configId, resource);

        // Update the existing PDF stamper configuration.
        updateConfiguration(configId, logoStreamLocation);

        // Create a job using the given settings.
        final String jobId = createJob(configId);

        // Upload an image, office or pdf for conversion to PDF. Please note that you can upload multiple files. Conversion will not be started yet.
        final File file = new File(StampPdf.class.getResource("/canvas.pdf").getFile());
        jobsApi.addInputFile(jobId, file);

        // Start PDF conversion. Convert the previously uploaded file(s) to PDF.
        // The settings supplied with the job in the request body are used for the conversion.
        // You can only submit the job after a new Job is created with status INPUTS_UPLOADED or resubmit an existing Job with status ERROR.
        // In all cases the job Id in the path must match the jobId in the request.
        submitJob(jobId, configId);

        // Get the PDF job definition and current state. Please note that you can differentiate based on http response status.
        awaitJob(jobId);

        // Get the PDF as binary stream/file. Our API generation does not allow changing the media type based on the Accepted header unfortunately.
        // This means we use a separate path postfix with the value &#39;/stream&#39;.
        // This API only returns the PDF when the response status.
        final byte[] content = getFileResponse(jobId);

        // Write content to result file
        final File tempFile = File.createTempFile("sphereon-stamp-example-",".pdf");
        try (FileOutputStream fos = new FileOutputStream(tempFile)) {
            fos.write(content);
        }

        // Delete a PDF stamper configuration.
        configApi.deleteConfiguration(configId);

        // Delete the PDF job and all related files.
        jobsApi.deleteJob(jobId);
    }

    private static void initClient(final String accessToken) {
        final ApiClient apiClient = Configuration.getDefaultApiClient();
        apiClient.setAccessToken(accessToken);
        apiClient.setConnectTimeout(10000);
        configApi.setApiClient(apiClient);
        jobsApi.setApiClient(apiClient);
    }

    private static String createConfiguration() throws ApiException {
        final StamperConfig config = new StamperConfig();
        // add a blockchain config to the pdf stamper config
        config.setBlockchainConfig(new BlockchainConfig().proofConfigName("multichain")
            .blockchainAnchors(Collections.singletonList(BlockchainAnchorsEnum.AFTER_STAMP)));

        // Create pdf stamper config
        final StamperConfigResponse response = configApi.createConfiguration(config);

        return response.getConfigId();
    }

    public static StamperConfigResponse updateConfiguration(final String configId, final StreamLocation logoStreamLocation) throws ApiException {
        // Create offset
        final Point offset = new Point();
        offset.setX(-10f);
        offset.setY(10f);

        // Set image dimensions
        final Dimension scaledDimension = new Dimension();
        scaledDimension.setHeight(50f);
        scaledDimension.setWidth(230f);

        // Create image component
        final ImageComponent logoComponent = new ImageComponent();
        logoComponent.setImageStreamLocation(logoStreamLocation);
        logoComponent.setScaledDimension(scaledDimension);

        // Create hyperlink component
        final HyperlinkComponent hyperlinkComponent = new HyperlinkComponent();
        hyperlinkComponent.setAddress("https://document-verify.com/");
        hyperlinkComponent.setHeight(50);
        hyperlinkComponent.setWidth(230);

        // Create connector
        final Connector rightComponentConnector = new Connector();
        rightComponentConnector.setHorizontalAnchorPoint(Connector.HorizontalAnchorPointEnum.RIGHT);
        rightComponentConnector.setVerticalAnchorPoint(Connector.VerticalAnchorPointEnum.BOTTOM);
        rightComponentConnector.setComponents(Arrays.asList(logoComponent, hyperlinkComponent));
        rightComponentConnector.setOffset(offset);

        // Create canvas component
        final CanvasComponent firstPageCanvasComponent = new CanvasComponent();
        firstPageCanvasComponent.setPageOperation(CanvasComponent.PageOperationEnum.STAMP);
        firstPageCanvasComponent.setPageSelector(CanvasComponent.PageSelectorEnum.FIRST_PAGE);
        firstPageCanvasComponent.setConnectors(Collections.singletonList(rightComponentConnector));

        // TODO add signature component

        final StamperConfig config = new StamperConfig();
        // Attach canvas component to pdf stamper config
        config.setCanvasComponents(Collections.singletonList(firstPageCanvasComponent));

        // update the configuration with the new settings
        return configApi.updateConfiguration(configId, config);
    }

    private static String createJob(final String configId) throws ApiException {
        // create job request
        final PdfStamperJobRequest jobRequest = new PdfStamperJobRequest();
        jobRequest.addConfigIdsItem(configId);

        // create job
        final PdfStamperJobResult response = jobsApi.createJob(jobRequest);

        return response.getJobId();
    }

    public static PdfStamperJobResult submitJob(final String jobId, final String configId) throws ApiException {
        // submit job
        return jobsApi.submitJob(jobId);
    }

    public static byte[] getFileResponse(final String jobId) throws ApiException {
        // get the first stream for the job
        return jobsApi.getFirstStream(jobId);
    }

    public static void awaitJob(final String jobId) throws InterruptedException, ApiException {
        // wait until job is done processing
        int count = 180;
            while (count > 0) {
            Thread.sleep(1000);
            count--;

            final PdfStamperJobResult response = jobsApi.getJob(jobId);
            if (response.getJobStatus() != PdfStamperJobResult.JobStatusEnum.PROCESSING) {
                System.out.println("job finished processing: " + response);
                break;
            }
        }
    }

}