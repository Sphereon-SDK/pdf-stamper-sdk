package com.sphereon.sdk.pdf.stamper.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.regex.Pattern;
import org.apache.commons.lang3.StringUtils;

@ApiModel(value = "PdfSignatureComponent", description = "An invisible component that adds a PDF signature", parent = StampComponent.class)
public class PdfSignatureComponent extends StampComponent {
    //    private static final transient String NAME_REGEX = "^.*[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}.*$";
    private static final transient Pattern NAME_PATTERN = Pattern.compile("^.*[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}.*$");

    @ApiModelProperty(value = "The optional certificate name, version and configuration to use for the signature. If not specified the Sphereon supplied certificate will be used")
    private CertificateSettings certificateSettings;

    @ApiModelProperty(value = "The signature mode to use. Only one certification (company/organization seal) can be used for a document and it has to be the first. Many approvals can be used", required = true)
    private SignatureMode signatureMode;

    @ApiModelProperty(value = "The name in the signature", required = true)
    private String name;

    @ApiModelProperty(value = "Location (optional)")
    private String location;

    @ApiModelProperty(value = "Reason (optional)")
    private String reason;

    @ApiModelProperty(value = "Visible signature. If not specified, the signature will be invisible in the background")
    private VisibleSignature visibleSignature;

    public PdfSignatureComponent() {
        super(StampType.PDFSIGNATURECOMPONENT.name());
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public SignatureMode getSignatureMode() {
        return signatureMode;
    }

    public void setSignatureMode(SignatureMode signatureMode) {
        this.signatureMode = signatureMode;
    }

    @Override
    public void validate() {
        if (StringUtils.isEmpty(name)) {
            throw new IllegalArgumentException("Cannot create a PDF signature without a name");
        } else if (certificateSettings == null && !NAME_PATTERN.matcher(name).find()) {
            throw new IllegalArgumentException("Name needs to contain a valid e-mail address when not using a custom certificate!. Supplied: " + name);
        }
    }

    public CertificateSettings getCertificateSettings() {
        return certificateSettings;
    }

    public void setCertificateSettings(CertificateSettings certificateSettings) {
        this.certificateSettings = certificateSettings;
    }

    public VisibleSignature getVisibleSignature() {
        return visibleSignature;
    }

    public void setVisibleSignature(VisibleSignature visibleSignature) {
        this.visibleSignature = visibleSignature;
    }
}
