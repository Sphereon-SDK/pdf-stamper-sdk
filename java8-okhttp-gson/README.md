# pdfstamper-java8-okhttp-gson

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

### Maven users

Add these repositories to your project's POM:

```xml
<repositories>
  <!-- If you want to use released versions of the SDK -->
  <repository>
    <id>sphereon-sdk-releases</id>
    <url>https://nexus.qa.sphereon.com/nexus/content/repositories/sphereon-sdk-releases/</url>
  </repository>
  
  <!-- If you want to use snapshot versions of the SDK -->
  <repository>
    <id>sphereon-sdk-snapshots</id>
    <url>https://nexus.qa.sphereon.com/nexus/content/repositories/sphereon-sdk-snapshots/</url>
   </repository>
</repositories>
```
Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>com.sphereon.sdk</groupId>
    <artifactId>pdfstamper-java8-okhttp-gson</artifactId>
    <version>1.0.2</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "com.sphereon.sdk:pdfstamper-java8-okhttp-gson:1.0.2"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

* target/com.sphereon.sdk.pdf.stamper-java8-okhttp-gson-1.0.0-SNAPSHOT.jar
* target/lib/*.jar

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import com.sphereon.sdk.pdf.stamper.handler.*;
import com.sphereon.sdk.pdf.stamper.handler.auth.*;
import com.sphereon.sdk.pdf.stamper.model.*;
import com.sphereon.sdk.pdf.stamper.api.ConfigApi;

import java.io.File;
import java.util.*;

public class ConfigApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        
        // Configure OAuth2 access token for authorization: oauth2schema
        OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
        oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

        ConfigApi apiInstance = new ConfigApi();
        StamperConfig stampConfiguration = new StamperConfig(); // StamperConfig | The PDF stamper configuration
        try {
            StamperConfigResponse result = apiInstance.createConfiguration(stampConfiguration);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConfigApi#createConfiguration");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://gw.api.cloud.sphereon.com/pdf/stamp/1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ConfigApi* | [**createConfiguration**](docs/ConfigApi.md#createConfiguration) | **POST** /config | Create PDF stamper configuration
*ConfigApi* | [**deleteConfiguration**](docs/ConfigApi.md#deleteConfiguration) | **DELETE** /config/{configId} | Delete PDF stamper configuration
*ConfigApi* | [**deleteResources**](docs/ConfigApi.md#deleteResources) | **DELETE** /config/{configId}/streams | Delete resources
*ConfigApi* | [**getConfiguration**](docs/ConfigApi.md#getConfiguration) | **GET** /config/{configId} | Get PDF stamper configuration
*ConfigApi* | [**updateConfiguration**](docs/ConfigApi.md#updateConfiguration) | **PUT** /config/{configId} | Update PDF stamper configuration
*ConfigApi* | [**uploadResource**](docs/ConfigApi.md#uploadResource) | **POST** /config/{configId}/streams/multipart | Upload a configuration resource
*JobsApi* | [**addContent**](docs/JobsApi.md#addContent) | **POST** /jobs/{jobId}/streams/content | Upload a base64 encoded file
*JobsApi* | [**addInputFile**](docs/JobsApi.md#addInputFile) | **POST** /jobs/{jobId}/streams/multipart | Upload a file
*JobsApi* | [**addInputStreamLocations**](docs/JobsApi.md#addInputStreamLocations) | **POST** /jobs/{jobId}/streams/location | Add Input Stream Location(s)
*JobsApi* | [**createJob**](docs/JobsApi.md#createJob) | **POST** /jobs | Create PDF stamper job
*JobsApi* | [**deleteJob**](docs/JobsApi.md#deleteJob) | **DELETE** /jobs/{jobId} | Delete a job manually
*JobsApi* | [**getFirstStream**](docs/JobsApi.md#getFirstStream) | **GET** /jobs/{jobId}/streams/result | Get the current/first result stream
*JobsApi* | [**getJob**](docs/JobsApi.md#getJob) | **GET** /jobs/{jobId} | Job definition and state
*JobsApi* | [**getJobs**](docs/JobsApi.md#getJobs) | **GET** /jobs | Get all jobs
*JobsApi* | [**getStreamById**](docs/JobsApi.md#getStreamById) | **GET** /jobs/{jobId}/streams/result/{correlationId} | Get the result stream by correlation Id
*JobsApi* | [**submitJob**](docs/JobsApi.md#submitJob) | **PUT** /jobs/{jobId} | Submit PDF stamper job for processing
*SynchronousApi* | [**syncJobContent**](docs/SynchronousApi.md#syncJobContent) | **POST** /sync/streams/content | Execute a synchronous stamp job with a content request/response.
*SynchronousApi* | [**syncJobStreamLocation**](docs/SynchronousApi.md#syncJobStreamLocation) | **POST** /sync/streams/location | Execute a synchronous stamp job with a streamlocation.


## Documentation for Models

 - [BlockchainConfig](docs/BlockchainConfig.md)
 - [Border](docs/Border.md)
 - [CanvasComponent](docs/CanvasComponent.md)
 - [CertificateSettings](docs/CertificateSettings.md)
 - [ClaimParameters](docs/ClaimParameters.md)
 - [Color](docs/Color.md)
 - [Connector](docs/Connector.md)
 - [ContentRequest](docs/ContentRequest.md)
 - [ContentResponse](docs/ContentResponse.md)
 - [Credentials](docs/Credentials.md)
 - [DefaultJobSettings](docs/DefaultJobSettings.md)
 - [Dimension](docs/Dimension.md)
 - [Error](docs/Error.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [InputResultLocation](docs/InputResultLocation.md)
 - [InputSettings](docs/InputSettings.md)
 - [Lifecycle](docs/Lifecycle.md)
 - [PdfStamperJobRequest](docs/PdfStamperJobRequest.md)
 - [PdfStamperJobResult](docs/PdfStamperJobResult.md)
 - [Point](docs/Point.md)
 - [RGBValue](docs/RGBValue.md)
 - [ResultSettings](docs/ResultSettings.md)
 - [StampComponent](docs/StampComponent.md)
 - [StamperConfig](docs/StamperConfig.md)
 - [StamperConfigResponse](docs/StamperConfigResponse.md)
 - [StorageLocation](docs/StorageLocation.md)
 - [StreamLocation](docs/StreamLocation.md)
 - [VisibleSignature](docs/VisibleSignature.md)
 - [BarcodeComponent](docs/BarcodeComponent.md)
 - [BlockchainProofComponent](docs/BlockchainProofComponent.md)
 - [HyperlinkComponent](docs/HyperlinkComponent.md)
 - [ImageComponent](docs/ImageComponent.md)
 - [LineComponent](docs/LineComponent.md)
 - [PdfSignatureComponent](docs/PdfSignatureComponent.md)
 - [TextComponent](docs/TextComponent.md)


## Documentation for Authorization

Authentication schemes defined for the API:
### oauth2schema

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: 
  - global: accessEverything


## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author

dev@sphereon.com

