/**
 * PDF stamper
 * The PDF Stamper API enables the possibility to add both static and dynamic stamps on existing PDFs. The stamps can consist of one or more barcode, hyperlink, image, line or text elements.    The flow is generally as follows:  1. Make a configuration containing the stamp information  2. Create a job specifying the desired configuration  3. Add one or more PDF files to the job  4. Start the job for processing  5. Retrieve the processed files    Full API Documentation: https://docs.sphereon.com/api/pdf-stamper/1.0  Interactive testing: A web based test console is available in the Sphereon API Store at https://store.sphereon.com
 *
 * OpenAPI spec version: 1.0
 * Contact: dev@sphereon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['SphereonSDKPdfStamper/ApiClient', 'SphereonSDKPdfStamper/model/ContentRequest', 'SphereonSDKPdfStamper/model/ContentResponse', 'SphereonSDKPdfStamper/model/ErrorResponse', 'SphereonSDKPdfStamper/model/PdfStamperJobRequest', 'SphereonSDKPdfStamper/model/PdfStamperJobResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ContentRequest'), require('../model/ContentResponse'), require('../model/ErrorResponse'), require('../model/PdfStamperJobRequest'), require('../model/PdfStamperJobResult'));
  } else {
    // Browser globals (root is window)
    if (!root.PdfStamper) {
      root.PdfStamper = {};
    }
    root.PdfStamper.SynchronousApi = factory(root.PdfStamper.ApiClient, root.PdfStamper.ContentRequest, root.PdfStamper.ContentResponse, root.PdfStamper.ErrorResponse, root.PdfStamper.PdfStamperJobRequest, root.PdfStamper.PdfStamperJobResult);
  }
}(this, function(ApiClient, ContentRequest, ContentResponse, ErrorResponse, PdfStamperJobRequest, PdfStamperJobResult) {
  'use strict';

  /**
   * Synchronous service.
   * @module SphereonSDKPdfStamper/api/SynchronousApi
   * @version 1.0
   */

  /**
   * Constructs a new SynchronousApi. 
   * @alias module:SphereonSDKPdfStamper/api/SynchronousApi
   * @class
   * @param {module:SphereonSDKPdfStamper/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:SphereonSDKPdfStamper/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the syncJobContent operation.
     * @callback module:SphereonSDKPdfStamper/api/SynchronousApi~syncJobContentCallback
     * @param {String} error Error message, if any.
     * @param {module:SphereonSDKPdfStamper/model/ContentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute a synchronous stamp job with a content request/response.
     * Execute a synchronous stamp job using the given configId. Header parameters will be parsed for additional template variables.
     * @param {String} configId The PDF stamper configuration id
     * @param {module:SphereonSDKPdfStamper/model/ContentRequest} contentRequest File content
     * @param {module:SphereonSDKPdfStamper/api/SynchronousApi~syncJobContentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:SphereonSDKPdfStamper/model/ContentResponse}
     */
    this.syncJobContent = function(configId, contentRequest, callback) {
      var postBody = contentRequest;

      // verify the required parameter 'configId' is set
      if (configId === undefined || configId === null) {
        throw new Error("Missing the required parameter 'configId' when calling syncJobContent");
      }

      // verify the required parameter 'contentRequest' is set
      if (contentRequest === undefined || contentRequest === null) {
        throw new Error("Missing the required parameter 'contentRequest' when calling syncJobContent");
      }


      var pathParams = {
        'configId': configId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2schema'];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ContentResponse;

      return this.apiClient.callApi(
        '/sync/streams/content', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the syncJobStreamLocation operation.
     * @callback module:SphereonSDKPdfStamper/api/SynchronousApi~syncJobStreamLocationCallback
     * @param {String} error Error message, if any.
     * @param {module:SphereonSDKPdfStamper/model/PdfStamperJobResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute a synchronous stamp job with a streamlocation.
     * Execute a synchronous stamp job using the given configId. Header parameters will be parsed for additional template variables.
     * @param {module:SphereonSDKPdfStamper/model/PdfStamperJobRequest} jobRequest Job request
     * @param {module:SphereonSDKPdfStamper/api/SynchronousApi~syncJobStreamLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:SphereonSDKPdfStamper/model/PdfStamperJobResult}
     */
    this.syncJobStreamLocation = function(jobRequest, callback) {
      var postBody = jobRequest;

      // verify the required parameter 'jobRequest' is set
      if (jobRequest === undefined || jobRequest === null) {
        throw new Error("Missing the required parameter 'jobRequest' when calling syncJobStreamLocation");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2schema'];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = PdfStamperJobResult;

      return this.apiClient.callApi(
        '/sync/streams/location', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));