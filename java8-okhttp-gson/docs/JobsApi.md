# JobsApi

All URIs are relative to *https://gw.api.cloud.sphereon.com/pdf/stamp/0.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContent**](JobsApi.md#addContent) | **POST** /jobs/{jobid}/streams/content | Upload a base64 encoded file
[**addInputFile**](JobsApi.md#addInputFile) | **POST** /jobs/{jobid}/streams/multipart | Upload a file
[**addInputStreamLocations**](JobsApi.md#addInputStreamLocations) | **POST** /jobs/{jobid}/streams/location | Add Input Stream Location(s)
[**createJob**](JobsApi.md#createJob) | **POST** /jobs | Create PDF stamper job
[**deleteJob**](JobsApi.md#deleteJob) | **DELETE** /jobs/{jobid} | Delete a job manually
[**getJob**](JobsApi.md#getJob) | **GET** /jobs/{jobid} | Job definition and state
[**getJobs**](JobsApi.md#getJobs) | **GET** /jobs | Get all jobs
[**getStream**](JobsApi.md#getStream) | **GET** /jobs/{jobid}/streams/result | Get the current result stream
[**submitJob**](JobsApi.md#submitJob) | **PUT** /jobs/{jobid} | Submit PDF stamper job for processing


<a name="addContent"></a>
# **addContent**
> PdfStamperJobContainer addContent(fileContent, jobid)

Upload a base64 encoded file

Upload an image, office or pdf for conversion to PDF, embedded in a json as a base64 encoded string

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.JobsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

JobsApi apiInstance = new JobsApi();
FileContentRequest fileContent = new FileContentRequest(); // FileContentRequest | File content
String jobid = "jobid_example"; // String | jobid
try {
    PdfStamperJobContainer result = apiInstance.addContent(fileContent, jobid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JobsApi#addContent");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileContent** | [**FileContentRequest**](FileContentRequest.md)| File content |
 **jobid** | **String**| jobid |

### Return type

[**PdfStamperJobContainer**](PdfStamperJobContainer.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="addInputFile"></a>
# **addInputFile**
> PdfStamperJobContainer addInputFile(jobid, stream)

Upload a file

Upload a pdf to stamp one or more configurations. Please note that you can upload multiple files.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.JobsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

JobsApi apiInstance = new JobsApi();
String jobid = "jobid_example"; // String | jobid
File stream = new File("/path/to/file.txt"); // File | The (additional) binary image or PDF (file/inputstream) to convert to PDF
try {
    PdfStamperJobContainer result = apiInstance.addInputFile(jobid, stream);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JobsApi#addInputFile");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **String**| jobid |
 **stream** | **File**| The (additional) binary image or PDF (file/inputstream) to convert to PDF |

### Return type

[**PdfStamperJobContainer**](PdfStamperJobContainer.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json;charset=UTF-8

<a name="addInputStreamLocations"></a>
# **addInputStreamLocations**
> PdfStamperJobContainer addInputStreamLocations(jobid, streamLocations)

Add Input Stream Location(s)

Add image, office or pdf input stream location(s) from the storage API for conversion to PDF. Please note that you can upload multiple files. Conversion will not be started yet.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.JobsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

JobsApi apiInstance = new JobsApi();
String jobid = "jobid_example"; // String | jobid
List<StreamLocation> streamLocations = Arrays.asList(new StreamLocation()); // List<StreamLocation> | The (additional) binary image or PDF (file/inputstream) to convert to PDF
try {
    PdfStamperJobContainer result = apiInstance.addInputStreamLocations(jobid, streamLocations);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JobsApi#addInputStreamLocations");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **String**| jobid |
 **streamLocations** | [**List&lt;StreamLocation&gt;**](StreamLocation.md)| The (additional) binary image or PDF (file/inputstream) to convert to PDF |

### Return type

[**PdfStamperJobContainer**](PdfStamperJobContainer.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="createJob"></a>
# **createJob**
> PdfStamperJobContainer createJob(jobSettings)

Create PDF stamper job

Create a job using the given settings.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.JobsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

JobsApi apiInstance = new JobsApi();
PdfStamperJobSettings jobSettings = new PdfStamperJobSettings(); // PdfStamperJobSettings | jobSettings
try {
    PdfStamperJobContainer result = apiInstance.createJob(jobSettings);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JobsApi#createJob");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobSettings** | [**PdfStamperJobSettings**](PdfStamperJobSettings.md)| jobSettings |

### Return type

[**PdfStamperJobContainer**](PdfStamperJobContainer.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="deleteJob"></a>
# **deleteJob**
> PdfStamperJobContainer deleteJob(jobid)

Delete a job manually

Delete the PDF stamper job and all related files depending on the lifecycle.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.JobsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

JobsApi apiInstance = new JobsApi();
String jobid = "jobid_example"; // String | jobid
try {
    PdfStamperJobContainer result = apiInstance.deleteJob(jobid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JobsApi#deleteJob");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **String**| jobid |

### Return type

[**PdfStamperJobContainer**](PdfStamperJobContainer.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="getJob"></a>
# **getJob**
> PdfStamperJobContainer getJob(jobid)

Job definition and state

Get the PDF stamper job definition and current state. Please note that you can differentiate based on http response status.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.JobsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

JobsApi apiInstance = new JobsApi();
String jobid = "jobid_example"; // String | jobid
try {
    PdfStamperJobContainer result = apiInstance.getJob(jobid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JobsApi#getJob");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **String**| jobid |

### Return type

[**PdfStamperJobContainer**](PdfStamperJobContainer.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="getJobs"></a>
# **getJobs**
> List&lt;PdfStamperJobContainer&gt; getJobs(jobStatuses)

Get all jobs

Get all PDF stamper job definitions and their current state.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.JobsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

JobsApi apiInstance = new JobsApi();
List<String> jobStatuses = Arrays.asList("jobStatuses_example"); // List<String> | A list of jobStatuses to filter on.
try {
    List<PdfStamperJobContainer> result = apiInstance.getJobs(jobStatuses);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JobsApi#getJobs");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobStatuses** | [**List&lt;String&gt;**](String.md)| A list of jobStatuses to filter on. | [optional] [enum: CREATED, INPUTS_UPLOADED, PROCESSING, DONE, ERROR, DELETED]

### Return type

[**List&lt;PdfStamperJobContainer&gt;**](PdfStamperJobContainer.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="getStream"></a>
# **getStream**
> byte[] getStream(jobid)

Get the current result stream

Get the PDF stamper as binary stream/file.  Our API generation does not allow changing the media type based on the Accepted header unfortunately.  This means we use a separate path postfix with the value &#39;/stream&#39;.  This API only returns the PDF when the response status is DONE.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.JobsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

JobsApi apiInstance = new JobsApi();
String jobid = "jobid_example"; // String | jobid
try {
    byte[] result = apiInstance.getStream(jobid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JobsApi#getStream");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobid** | **String**| jobid |

### Return type

**byte[]**

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

<a name="submitJob"></a>
# **submitJob**
> PdfStamperJobContainer submitJob(job, jobid)

Submit PDF stamper job for processing

Start PDF stamper job for processing. Stamp one or more configurations on the previously uploaded PDFs. The settings supplied with the job in the request body are used. You can only submit the job after a new Job is created with status INPUTS_UPLOADED or resubmit an existing Job with status ERROR.

### Example
```java
// Import classes:
//import com.sphereon.sdk.pdf.stamper.handler.ApiClient;
//import com.sphereon.sdk.pdf.stamper.handler.ApiException;
//import com.sphereon.sdk.pdf.stamper.handler.Configuration;
//import com.sphereon.sdk.pdf.stamper.handler.auth.*;
//import com.sphereon.sdk.pdf.stamper.api.JobsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: oauth2schema
OAuth oauth2schema = (OAuth) defaultClient.getAuthentication("oauth2schema");
oauth2schema.setAccessToken("YOUR ACCESS TOKEN");

JobsApi apiInstance = new JobsApi();
PdfStamperJobSettings job = new PdfStamperJobSettings(); // PdfStamperJobSettings | jobSettings
String jobid = "jobid_example"; // String | jobid
try {
    PdfStamperJobContainer result = apiInstance.submitJob(job, jobid);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling JobsApi#submitJob");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job** | [**PdfStamperJobSettings**](PdfStamperJobSettings.md)| jobSettings |
 **jobid** | **String**| jobid |

### Return type

[**PdfStamperJobContainer**](PdfStamperJobContainer.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

