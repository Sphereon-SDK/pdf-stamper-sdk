# ConfigApi

All URIs are relative to *https://gw.api.cloud.sphereon.com/pdf/stamp/0.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConfiguration**](ConfigApi.md#createConfiguration) | **POST** /config | Create PDF stamper configuration
[**deleteConfiguration**](ConfigApi.md#deleteConfiguration) | **DELETE** /config/{configId} | Delete PDF stamper configuration
[**deleteResources**](ConfigApi.md#deleteResources) | **DELETE** /config/{configId}/streams | Delete resources
[**getConfiguration**](ConfigApi.md#getConfiguration) | **GET** /config/{configId} | Get PDF stamper configuration
[**updateConfiguration**](ConfigApi.md#updateConfiguration) | **PUT** /config/{configId} | Update PDF stamper configuration
[**uploadResource**](ConfigApi.md#uploadResource) | **POST** /config/{configId}/streams/multipart | Upload resource


<a name="createConfiguration"></a>
# **createConfiguration**
> PdfStamperConfigContainer createConfiguration(pdfStamperConfiguration)

Create PDF stamper configuration

Create / initialize a new PDF stamper configuration.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.ConfigApi;

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
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pdfStamperConfiguration** | [**PdfStamperConfig**](PdfStamperConfig.md)| The PDF stamper configuration |

### Return type

[**PdfStamperConfigContainer**](PdfStamperConfigContainer.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="deleteConfiguration"></a>
# **deleteConfiguration**
> PdfStamperConfigContainer deleteConfiguration(configId)

Delete PDF stamper configuration

Delete a PDF stamper configuration.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.ConfigApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

ConfigApi apiInstance = new ConfigApi();
String configId = "configId_example"; // String | The PDF stamper configuration id
try {
    PdfStamperConfigContainer result = apiInstance.deleteConfiguration(configId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigApi#deleteConfiguration");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **String**| The PDF stamper configuration id |

### Return type

[**PdfStamperConfigContainer**](PdfStamperConfigContainer.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="deleteResources"></a>
# **deleteResources**
> deleteResources(configId, streamLocations)

Delete resources

Delete resources referenced by a configuration.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.ConfigApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

ConfigApi apiInstance = new ConfigApi();
String configId = "configId_example"; // String | The PDF stamper configuration id
List<StreamLocation> streamLocations = Arrays.asList(new StreamLocation()); // List<StreamLocation> | The resource locations in storage
try {
    apiInstance.deleteResources(configId, streamLocations);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigApi#deleteResources");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **String**| The PDF stamper configuration id |
 **streamLocations** | [**List&lt;StreamLocation&gt;**](StreamLocation.md)| The resource locations in storage |

### Return type

null (empty response body)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="getConfiguration"></a>
# **getConfiguration**
> PdfStamperConfigContainer getConfiguration(configId)

Get PDF stamper configuration

Retrieve a PDF stamper configuration.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.ConfigApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

ConfigApi apiInstance = new ConfigApi();
String configId = "configId_example"; // String | The PDF stamper configuration id
try {
    PdfStamperConfigContainer result = apiInstance.getConfiguration(configId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigApi#getConfiguration");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **String**| The PDF stamper configuration id |

### Return type

[**PdfStamperConfigContainer**](PdfStamperConfigContainer.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="updateConfiguration"></a>
# **updateConfiguration**
> PdfStamperConfigContainer updateConfiguration(configId, pdfStamperConfiguration)

Update PDF stamper configuration

Update an existing PDF stamper configuration.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.ConfigApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

ConfigApi apiInstance = new ConfigApi();
String configId = "configId_example"; // String | The PDF stamper configuration id
PdfStamperConfig pdfStamperConfiguration = new PdfStamperConfig(); // PdfStamperConfig | The PDF stamper configuration
try {
    PdfStamperConfigContainer result = apiInstance.updateConfiguration(configId, pdfStamperConfiguration);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigApi#updateConfiguration");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **String**| The PDF stamper configuration id |
 **pdfStamperConfiguration** | [**PdfStamperConfig**](PdfStamperConfig.md)| The PDF stamper configuration |

### Return type

[**PdfStamperConfigContainer**](PdfStamperConfigContainer.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="uploadResource"></a>
# **uploadResource**
> StreamLocation uploadResource(configId, stream)

Upload resource

Upload a resource needed by a configuration.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.ConfigApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

ConfigApi apiInstance = new ConfigApi();
String configId = "configId_example"; // String | configId
File stream = new File("/path/to/file.txt"); // File | The resource data
try {
    StreamLocation result = apiInstance.uploadResource(configId, stream);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ConfigApi#uploadResource");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configId** | **String**| configId |
 **stream** | **File**| The resource data |

### Return type

[**StreamLocation**](StreamLocation.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json;charset=UTF-8

