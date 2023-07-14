const ibmCloudValidationRules = require('@ibm-cloud/openapi-ruleset');
const { propertyCasingConvention } = require('@ibm-cloud/openapi-ruleset/src/functions');
const { schemas } = require('@ibm-cloud/openapi-ruleset-utilities/src/collections');

module.exports = {
  extends: ibmCloudValidationRules,
  rules: {
    "ibm-no-array-responses": "off",
    "ibm-operationid-casing-convention": "off",
    "ibm-summary-sentence-style": "off",
    "ibm-success-response-example": "off",
    "ibm-response-status-codes": "off",
    "ibm-string-attributes": "off",
    "ibm-avoid-inline-schemas": "off",
    "ibm-schema-description": "off",
    "ibm-array-attributes": "off",
  }
};
