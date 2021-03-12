package com.sphereon.sdk.pdf.stamper.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(description = "The PDF Certificate signature settings")
public class CertificateSettings {
    @ApiModelProperty(value = "The Crypto Keys configuration name to use. The name has to be created in the crypto-keys API", required = true)
    private String cryptoKeysConfigName;

    @ApiModelProperty(value = "The name of the certificate from the crypto-keys configuration to use. The certificate has to be present in the crypto-keys API", required = true)
    private String certificateName;

    @ApiModelProperty(value = "The optional version of the certificate from the crypto-keys configuration to use. Can be the value 'latest' to automatically use the latest version. The certificate (version) has to be present in the crypto-keys API", required = true)
    private String certificateVersion;

    public String getCryptoKeysConfigName() {
        return cryptoKeysConfigName;
    }

    public void setCryptoKeysConfigName(String cryptoKeysConfigName) {
        this.cryptoKeysConfigName = cryptoKeysConfigName;
    }

    public String getCertificateName() {
        return certificateName;
    }

    public void setCertificateName(String certificateName) {
        this.certificateName = certificateName;
    }

    public String getCertificateVersion() {
        return certificateVersion;
    }

    public void setCertificateVersion(String certificateVersion) {
        this.certificateVersion = certificateVersion;
    }

}
