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
    define(['SphereonSDKPdfStamper/ApiClient', 'SphereonSDKPdfStamper/model/Border', 'SphereonSDKPdfStamper/model/CertificateSettings', 'SphereonSDKPdfStamper/model/Connector', 'SphereonSDKPdfStamper/model/Point', 'SphereonSDKPdfStamper/model/StampComponent', 'SphereonSDKPdfStamper/model/VisibleSignature'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Border'), require('./CertificateSettings'), require('./Connector'), require('./Point'), require('./StampComponent'), require('./VisibleSignature'));
  } else {
    // Browser globals (root is window)
    if (!root.PdfStamper) {
      root.PdfStamper = {};
    }
    root.PdfStamper.PdfSignatureComponent = factory(root.PdfStamper.ApiClient, root.PdfStamper.Border, root.PdfStamper.CertificateSettings, root.PdfStamper.Connector, root.PdfStamper.Point, root.PdfStamper.StampComponent, root.PdfStamper.VisibleSignature);
  }
}(this, function(ApiClient, Border, CertificateSettings, Connector, Point, StampComponent, VisibleSignature) {
  'use strict';




  /**
   * The PdfSignatureComponent model module.
   * @module SphereonSDKPdfStamper/model/PdfSignatureComponent
   * @version 1.0
   */

  /**
   * Constructs a new <code>PdfSignatureComponent</code>.
   * An invisible component that adds a PDF signature
   * @alias module:SphereonSDKPdfStamper/model/PdfSignatureComponent
   * @class
   * @extends module:SphereonSDKPdfStamper/model/StampComponent
   * @param name {String} The name in the signature
   * @param signatureMode {module:SphereonSDKPdfStamper/model/PdfSignatureComponent.SignatureModeEnum} The signature mode to use. Only one certification (company/organization seal) can be used for a document and it has to be the first. Many approvals can be used
   */
  var exports = function(name, signatureMode) {
    var _this = this;
    StampComponent.call(_this);



    _this['name'] = name;

    _this['signatureMode'] = signatureMode;
  };

  /**
   * Constructs a <code>PdfSignatureComponent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:SphereonSDKPdfStamper/model/PdfSignatureComponent} obj Optional instance to populate.
   * @return {module:SphereonSDKPdfStamper/model/PdfSignatureComponent} The populated <code>PdfSignatureComponent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      StampComponent.constructFromObject(data, obj);
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('certificateSettings')) {
        obj['certificateSettings'] = CertificateSettings.constructFromObject(data['certificateSettings']);
      }
      if (data.hasOwnProperty('visibleSignature')) {
        obj['visibleSignature'] = VisibleSignature.constructFromObject(data['visibleSignature']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('signatureMode')) {
        obj['signatureMode'] = ApiClient.convertToType(data['signatureMode'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(StampComponent.prototype);
  exports.prototype.constructor = exports;

  /**
   * Reason (optional)
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * The optional certificate name, version and configuration to use for the signature. If not specified the Sphereon supplied certificate will be used
   * @member {module:SphereonSDKPdfStamper/model/CertificateSettings} certificateSettings
   */
  exports.prototype['certificateSettings'] = undefined;
  /**
   * Visible signature. If not specified, the signature will be invisible in the background
   * @member {module:SphereonSDKPdfStamper/model/VisibleSignature} visibleSignature
   */
  exports.prototype['visibleSignature'] = undefined;
  /**
   * The name in the signature
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Location (optional)
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * The signature mode to use. Only one certification (company/organization seal) can be used for a document and it has to be the first. Many approvals can be used
   * @member {module:SphereonSDKPdfStamper/model/PdfSignatureComponent.SignatureModeEnum} signatureMode
   */
  exports.prototype['signatureMode'] = undefined;


  /**
   * Allowed values for the <code>signatureMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SignatureModeEnum = {
    /**
     * value: "CERTIFICATION"
     * @const
     */
    "CERTIFICATION": "CERTIFICATION",
    /**
     * value: "APPROVAL"
     * @const
     */
    "APPROVAL": "APPROVAL"  };


  return exports;
}));


