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
    define(['SphereonSDKPdfStamper/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PdfStamper) {
      root.PdfStamper = {};
    }
    root.PdfStamper.RGBValue = factory(root.PdfStamper.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RGBValue model module.
   * @module SphereonSDKPdfStamper/model/RGBValue
   * @version 1.0
   */

  /**
   * Constructs a new <code>RGBValue</code>.
   * A RGB color value
   * @alias module:SphereonSDKPdfStamper/model/RGBValue
   * @class
   * @param b {Number} 
   * @param r {Number} 
   * @param g {Number} 
   */
  var exports = function(b, r, g) {
    var _this = this;

    _this['b'] = b;
    _this['r'] = r;
    _this['g'] = g;
  };

  /**
   * Constructs a <code>RGBValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:SphereonSDKPdfStamper/model/RGBValue} obj Optional instance to populate.
   * @return {module:SphereonSDKPdfStamper/model/RGBValue} The populated <code>RGBValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('b')) {
        obj['b'] = ApiClient.convertToType(data['b'], 'Number');
      }
      if (data.hasOwnProperty('r')) {
        obj['r'] = ApiClient.convertToType(data['r'], 'Number');
      }
      if (data.hasOwnProperty('g')) {
        obj['g'] = ApiClient.convertToType(data['g'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} b
   */
  exports.prototype['b'] = undefined;
  /**
   * @member {Number} r
   */
  exports.prototype['r'] = undefined;
  /**
   * @member {Number} g
   */
  exports.prototype['g'] = undefined;



  return exports;
}));

