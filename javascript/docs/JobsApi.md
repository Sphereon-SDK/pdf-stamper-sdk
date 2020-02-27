# PdfStamper.JobsApi

All URIs are relative to *https://gw.api.cloud.sphereon.com/pdf/stamp/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContent**](JobsApi.md#addContent) | **POST** /jobs/{jobId}/streams/content | Upload a base64 encoded file
[**addInputFile**](JobsApi.md#addInputFile) | **POST** /jobs/{jobId}/streams/multipart | Upload a file
[**addInputStreamLocations**](JobsApi.md#addInputStreamLocations) | **POST** /jobs/{jobId}/streams/location | Add Input Stream Location(s)
[**createJob**](JobsApi.md#createJob) | **POST** /jobs | Create PDF stamper job
[**deleteJob**](JobsApi.md#deleteJob) | **DELETE** /jobs/{jobId} | Delete a job manually
[**getFirstStream**](JobsApi.md#getFirstStream) | **GET** /jobs/{jobId}/streams/result | Get the current/first result stream
[**getJob**](JobsApi.md#getJob) | **GET** /jobs/{jobId} | Job definition and state
[**getJobs**](JobsApi.md#getJobs) | **GET** /jobs | Get all jobs
[**getStreamById**](JobsApi.md#getStreamById) | **GET** /jobs/{jobId}/streams/result/{correlationId} | Get the result stream by correlation Id
[**submitJob**](JobsApi.md#submitJob) | **PUT** /jobs/{jobId} | Submit PDF stamper job for processing


<a name="addContent"></a>
# **addContent**
> PdfStamperJobResult addContent(contentRequest, jobId)

Upload a base64 encoded file

Upload an image, office or pdf for conversion to PDF, embedded in a json as a base64 encoded string

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.JobsApi();

var contentRequest = new PdfStamper.ContentRequest(); // ContentRequest | Content request

var jobId = "jobId_example"; // String | jobId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addContent(contentRequest, jobId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentRequest** | [**ContentRequest**](ContentRequest.md)| Content request | 
 **jobId** | **String**| jobId | 

### Return type

[**PdfStamperJobResult**](PdfStamperJobResult.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="addInputFile"></a>
# **addInputFile**
> PdfStamperJobResult addInputFile(jobId, stream)

Upload a file

Upload a pdf to stamp one or more configurations. Please note that you can upload multiple files.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.JobsApi();

var jobId = "jobId_example"; // String | jobId

var stream = "/path/to/file.txt"; // File | The (additional) binary image or PDF (file/inputstream) to convert to PDF


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addInputFile(jobId, stream, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| jobId | 
 **stream** | **File**| The (additional) binary image or PDF (file/inputstream) to convert to PDF | 

### Return type

[**PdfStamperJobResult**](PdfStamperJobResult.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json;charset=UTF-8

<a name="addInputStreamLocations"></a>
# **addInputStreamLocations**
> PdfStamperJobResult addInputStreamLocations(jobId, streamLocations)

Add Input Stream Location(s)

Add image, office or pdf input stream location(s) from the storage API for conversion to PDF. Please note that you can upload multiple files. Conversion will not be started yet.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.JobsApi();

var jobId = "jobId_example"; // String | jobId

var streamLocations = [new PdfStamper.InputResultLocation()]; // [InputResultLocation] | The (additional) binary image or PDF (file/inputstream) to convert to PDF


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addInputStreamLocations(jobId, streamLocations, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| jobId | 
 **streamLocations** | [**[InputResultLocation]**](InputResultLocation.md)| The (additional) binary image or PDF (file/inputstream) to convert to PDF | 

### Return type

[**PdfStamperJobResult**](PdfStamperJobResult.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="createJob"></a>
# **createJob**
> PdfStamperJobResult createJob(jobRequest)

Create PDF stamper job

Create a job using the given settings.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.JobsApi();

var jobRequest = new PdfStamper.PdfStamperJobRequest(); // PdfStamperJobRequest | jobRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createJob(jobRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobRequest** | [**PdfStamperJobRequest**](PdfStamperJobRequest.md)| jobRequest | 

### Return type

[**PdfStamperJobResult**](PdfStamperJobResult.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

<a name="deleteJob"></a>
# **deleteJob**
> PdfStamperJobResult deleteJob(jobId)

Delete a job manually

Delete the PDF stamper job and all related files depending on the lifecycle.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.JobsApi();

var jobId = "jobId_example"; // String | jobId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteJob(jobId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| jobId | 

### Return type

[**PdfStamperJobResult**](PdfStamperJobResult.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="getFirstStream"></a>
# **getFirstStream**
> &#39;Blob&#39; getFirstStream(jobId)

Get the current/first result stream

Get the PDF stamper as binary stream/file.  Our API generation does not allow changing the media type based on the Accepted header unfortunately.  This means we use a separate path postfix with the value &#39;/stream&#39;.  This API only returns the PDF when the response status is DONE.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.JobsApi();

var jobId = "jobId_example"; // String | jobId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFirstStream(jobId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| jobId | 

### Return type

**&#39;Blob&#39;**

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json;charset=UTF-8

<a name="getJob"></a>
# **getJob**
> PdfStamperJobResult getJob(jobId)

Job definition and state

Get the PDF stamper job definition and current state. Please note that you can differentiate based on http response status.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.JobsApi();

var jobId = "jobId_example"; // String | jobId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJob(jobId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| jobId | 

### Return type

[**PdfStamperJobResult**](PdfStamperJobResult.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="getJobs"></a>
# **getJobs**
> [PdfStamperJobResult] getJobs(opts)

Get all jobs

Get all PDF stamper job definitions and their current state.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.JobsApi();

var opts = { 
  'jobStatuses': ["jobStatuses_example"] // [String] | A list of jobStatuses to filter on.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJobs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobStatuses** | [**[String]**](String.md)| A list of jobStatuses to filter on. | [optional] 

### Return type

[**[PdfStamperJobResult]**](PdfStamperJobResult.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

<a name="getStreamById"></a>
# **getStreamById**
> &#39;Blob&#39; getStreamById(correlationId, jobId)

Get the result stream by correlation Id

Get the PDF stamper as binary stream/file by correlation Id.  Our API generation does not allow changing the media type based on the Accepted header unfortunately.  This means we use a separate path postfix with the value &#39;/stream&#39;.  This API only returns the PDF when the response status is DONE.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.JobsApi();

var correlationId = "correlationId_example"; // String | correlationId

var jobId = "jobId_example"; // String | jobId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStreamById(correlationId, jobId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **correlationId** | **String**| correlationId | 
 **jobId** | **String**| jobId | 

### Return type

**&#39;Blob&#39;**

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json;charset=UTF-8

<a name="submitJob"></a>
# **submitJob**
> PdfStamperJobResult submitJob(jobId)

Submit PDF stamper job for processing

Start PDF stamper job for processing. Stamp one or more configurations on the previously uploaded PDFs. If the optional settings are supplied with the job in the request body, they are being used, otherwise the settings created during job creation are being used. You can only submit the job after a new Job is created with status INPUTS_UPLOADED or resubmit an existing Job with status ERROR.

### Example
```javascript
var PdfStamper = require('pdf_stamper');
var defaultClient = PdfStamper.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2schema
var oauth2schema = defaultClient.authentications['oauth2schema'];
oauth2schema.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PdfStamper.JobsApi();

var jobId = "jobId_example"; // String | jobId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.submitJob(jobId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | **String**| jobId | 

### Return type

[**PdfStamperJobResult**](PdfStamperJobResult.md)

### Authorization

[oauth2schema](../README.md#oauth2schema)

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

