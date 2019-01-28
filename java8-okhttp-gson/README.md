# com.sphereon.sdk.pdf.stamper-java8-okhttp-gson

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

Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>com.sphereon.sdk</groupId>
    <artifactId>com.sphereon.sdk.pdf.stamper-java8-okhttp-gson</artifactId>
    <version>0.1.0-SNAPSHOT</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "com.sphereon.sdk:com.sphereon.sdk.pdf.stamper-java8-okhttp-gson:0.1.0-SNAPSHOT"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

* target/com.sphereon.sdk.pdf.stamper-java8-okhttp-gson-0.1.0-SNAPSHOT.jar
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
        PdfStamperConfig pdfStamperConfiguration = new PdfStamperConfig(); // PdfStamperConfig | The PDF stamper configuration
        try {
            PdfStamperConfigContainer result = apiInstance.createConfiguration(pdfStamperConfiguration);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ConfigApi#createConfiguration");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:60091/pdf/stamp/0.2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ConfigApi* | [**createConfiguration**](docs/ConfigApi.md#createConfiguration) | **POST** /config | Create PDF stamper configuration
*ConfigApi* | [**deleteConfiguration**](docs/ConfigApi.md#deleteConfiguration) | **DELETE** /config/{configId} | Delete PDF stamper configuration
*ConfigApi* | [**deleteResources**](docs/ConfigApi.md#deleteResources) | **DELETE** /config/{configId}/streams | Delete resources
*ConfigApi* | [**getConfiguration**](docs/ConfigApi.md#getConfiguration) | **GET** /config/{configId} | Get PDF stamper configuration
*ConfigApi* | [**updateConfiguration**](docs/ConfigApi.md#updateConfiguration) | **PUT** /config/{configId} | Update PDF stamper configuration
*ConfigApi* | [**uploadResource**](docs/ConfigApi.md#uploadResource) | **POST** /config/{configId}/streams/multipart | Upload resource
*JobsApi* | [**addContent**](docs/JobsApi.md#addContent) | **POST** /jobs/{jobid}/streams/content | Upload a base64 encoded file
*JobsApi* | [**addInputFile**](docs/JobsApi.md#addInputFile) | **POST** /jobs/{jobid}/streams/multipart | Upload a file
*JobsApi* | [**addInputStreamLocations**](docs/JobsApi.md#addInputStreamLocations) | **POST** /jobs/{jobid}/streams/location | Add Input Stream Location(s)
*JobsApi* | [**createJob**](docs/JobsApi.md#createJob) | **POST** /jobs | Create PDF stamper job
*JobsApi* | [**deleteJob**](docs/JobsApi.md#deleteJob) | **DELETE** /jobs/{jobid} | Delete a job manually
*JobsApi* | [**getJob**](docs/JobsApi.md#getJob) | **GET** /jobs/{jobid} | Job definition and state
*JobsApi* | [**getJobs**](docs/JobsApi.md#getJobs) | **GET** /jobs | Get all jobs
*JobsApi* | [**getStream**](docs/JobsApi.md#getStream) | **GET** /jobs/{jobid}/streams/result | Get the current result stream
*JobsApi* | [**submitJob**](docs/JobsApi.md#submitJob) | **PUT** /jobs/{jobid} | Submit PDF stamper job for processing


## Documentation for Models

 - [Border](docs/Border.md)
 - [CanvasComponent](docs/CanvasComponent.md)
 - [Color](docs/Color.md)
 - [Connector](docs/Connector.md)
 - [Dimension](docs/Dimension.md)
 - [Error](docs/Error.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [FileContentRequest](docs/FileContentRequest.md)
 - [InputResources](docs/InputResources.md)
 - [InputSettings](docs/InputSettings.md)
 - [Lifecycle](docs/Lifecycle.md)
 - [PdfStamperConfig](docs/PdfStamperConfig.md)
 - [PdfStamperConfigContainer](docs/PdfStamperConfigContainer.md)
 - [PdfStamperJobContainer](docs/PdfStamperJobContainer.md)
 - [PdfStamperJobSettings](docs/PdfStamperJobSettings.md)
 - [Point](docs/Point.md)
 - [RGBValue](docs/RGBValue.md)
 - [ResultResources](docs/ResultResources.md)
 - [ResultSettings](docs/ResultSettings.md)
 - [StampComponent](docs/StampComponent.md)
 - [StorageLocation](docs/StorageLocation.md)
 - [StreamLocation](docs/StreamLocation.md)
 - [BarcodeComponent](docs/BarcodeComponent.md)
 - [HyperlinkComponent](docs/HyperlinkComponent.md)
 - [ImageComponent](docs/ImageComponent.md)
 - [LineComponent](docs/LineComponent.md)
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

