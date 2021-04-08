# SynchronousApi

All URIs are relative to *https://gw.api.cloud.sphereon.com/pdf/stamp/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**syncJobContent**](SynchronousApi.md#syncJobContent) | **POST** /sync/streams/content | Execute a synchronous stamp job with a content request/response.
[**syncJobStreamLocation**](SynchronousApi.md#syncJobStreamLocation) | **POST** /sync/streams/location | Execute a synchronous stamp job with a streamlocation.


<a name="syncJobContent"></a>
# **syncJobContent**
> ContentResponse syncJobContent(contentRequest)

Execute a synchronous stamp job with a content request/response.

Execute a synchronous stamp job using the given configId. Header parameters will be parsed for additional template variables.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.SynchronousApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

SynchronousApi apiInstance = new SynchronousApi();
ContentRequest contentRequest = new ContentRequest(); // ContentRequest | File content
try {
    ContentResponse result = apiInstance.syncJobContent(contentRequest);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SynchronousApi#syncJobContent");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentRequest** | [**ContentRequest**](ContentRequest.md)| File content |

### Return type

[**ContentResponse**](ContentResponse.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="syncJobStreamLocation"></a>
# **syncJobStreamLocation**
> PdfStamperJobResult syncJobStreamLocation(jobRequest)

Execute a synchronous stamp job with a streamlocation.

Execute a synchronous stamp job using the given configId. Header parameters will be parsed for additional template variables.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.SynchronousApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

SynchronousApi apiInstance = new SynchronousApi();
PdfStamperJobRequest jobRequest = new PdfStamperJobRequest(); // PdfStamperJobRequest | Job request
try {
    PdfStamperJobResult result = apiInstance.syncJobStreamLocation(jobRequest);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling SynchronousApi#syncJobStreamLocation");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRequest** | [**PdfStamperJobRequest**](PdfStamperJobRequest.md)| Job request |

### Return type

[**PdfStamperJobResult**](PdfStamperJobResult.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

