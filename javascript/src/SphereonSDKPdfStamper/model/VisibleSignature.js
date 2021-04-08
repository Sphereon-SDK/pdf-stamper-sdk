/**
 * PDF stamper
 * The PDF Stamper API enables the possibility to add both static and dynamic stamps on existing PDFs. The stamps can consist of one or more barcode, hyperlink, image, line or text elements. The API also supports digital signatures (blue bar), blockchain registrations and filling out forms    The flow is generally as follows:  1. Make a configuration containing the stamp information  2. Create a job specifying the desired configuration  3. Add one or more PDF files to the job  4. Start the job for processing  5. Retrieve the processed files    Full API Documentation: https://docs.sphereon.com/api/pdf-stamper/1.0  Interactive testing: A web based test console is available in the Sphereon API Store at https://store.sphereon.com
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
    define(['SphereonSDKPdfStamper/ApiClient', 'SphereonSDKPdfStamper/model/Connector', 'SphereonSDKPdfStamper/model/ImageComponent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Connector'), require('./ImageComponent'));
  } else {
    // Browser globals (root is window)
    if (!root.PdfStamper) {
      root.PdfStamper = {};
    }
    root.PdfStamper.VisibleSignature = factory(root.PdfStamper.ApiClient, root.PdfStamper.Connector, root.PdfStamper.ImageComponent);
  }
}(this, function(ApiClient, Connector, ImageComponent) {
  'use strict';




  /**
   * The VisibleSignature model module.
   * @module SphereonSDKPdfStamper/model/VisibleSignature
   * @version 1.0
   */

  /**
   * Constructs a new <code>VisibleSignature</code>.
   * @alias module:SphereonSDKPdfStamper/model/VisibleSignature
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>VisibleSignature</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:SphereonSDKPdfStamper/model/VisibleSignature} obj Optional instance to populate.
   * @return {module:SphereonSDKPdfStamper/model/VisibleSignature} The populated <code>VisibleSignature</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pageSelector')) {
        obj['pageSelector'] = ApiClient.convertToType(data['pageSelector'], 'String');
      }
      if (data.hasOwnProperty('connector')) {
        obj['connector'] = Connector.constructFromObject(data['connector']);
      }
      if (data.hasOwnProperty('imageComponent')) {
        obj['imageComponent'] = ImageComponent.constructFromObject(data['imageComponent']);
      }
    }
    return obj;
  }

  /**
   * The page for the visible signature (multiple pages is not supported, call multiple stamp configurations if that is desired)
   * @member {module:SphereonSDKPdfStamper/model/VisibleSignature.PageSelectorEnum} pageSelector
   */
  exports.prototype['pageSelector'] = undefined;
  /**
   * The connector (location) for the visible signature
   * @member {module:SphereonSDKPdfStamper/model/Connector} connector
   */
  exports.prototype['connector'] = undefined;
  /**
   * The image for the visible signature
   * @member {module:SphereonSDKPdfStamper/model/ImageComponent} imageComponent
   */
  exports.prototype['imageComponent'] = undefined;


  /**
   * Allowed values for the <code>pageSelector</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PageSelectorEnum = {
    /**
     * value: "FIRST_PAGE"
     * @const
     */
    "FIRST_PAGE": "FIRST_PAGE",
    /**
     * value: "LAST_PAGE"
     * @const
     */
    "LAST_PAGE": "LAST_PAGE",
    /**
     * value: "EVEN_PAGES"
     * @const
     */
    "EVEN_PAGES": "EVEN_PAGES",
    /**
     * value: "ODD_PAGES"
     * @const
     */
    "ODD_PAGES": "ODD_PAGES",
    /**
     * value: "ALL_PAGES"
     * @const
     */
    "ALL_PAGES": "ALL_PAGES",
    /**
     * value: "SPECIFIC_PAGES"
     * @const
     */
    "SPECIFIC_PAGES": "SPECIFIC_PAGES"  };


  return exports;
}));


