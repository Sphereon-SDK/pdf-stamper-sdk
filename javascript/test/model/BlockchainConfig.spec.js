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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PdfStamper);
  }
}(this, function(expect, PdfStamper) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PdfStamper.BlockchainConfig();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BlockchainConfig', function() {
    it('should create an instance of BlockchainConfig', function() {
      // uncomment below and update the code to test BlockchainConfig
      //var instane = new PdfStamper.BlockchainConfig();
      //expect(instance).to.be.a(PdfStamper.BlockchainConfig);
    });

    it('should have the property blockchainAnchors (base name: "blockchainAnchors")', function() {
      // uncomment below and update the code to test the property blockchainAnchors
      //var instane = new PdfStamper.BlockchainConfig();
      //expect(instance).to.be();
    });

    it('should have the property proofConfigName (base name: "proofConfigName")', function() {
      // uncomment below and update the code to test the property proofConfigName
      //var instane = new PdfStamper.BlockchainConfig();
      //expect(instance).to.be();
    });

  });

}));
