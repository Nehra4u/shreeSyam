import React, { useState } from 'react';
import './Donation.css';
import { useTranslation } from '../hooks/useTranslation';

const Donation = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('qr');

  const bankDetails = {
    bankName: 'Axis Bank',
    accountName: 'श्री श्याम मंदिर कमेटी',
    accountNumber: '1234567890123456',
    ifscCode: 'UTIB0001234',
    branch: 'Khatu Shyam Branch'
  };

  const upiDetails = {
    upiId: 'shyammandir@axisbank',
    merchantCode: 'SHYAM123'
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
  };

  return (
    <section className="donation-section">
      <div className="donation-container">
        <div className="donation-header">
          <h2 className="donation-title">
            <span className="divine-text">{t('donation.title')}</span>
            <span className="english-text">{t('donation.title')}</span>
          </h2>
          <p className="donation-subtitle">{t('donation.subtitle')}</p>
          <p className="donation-description">
            {t('donation.description')}
          </p>
        </div>

        <div className="donation-tabs">
          <button 
            className={`tab-btn ${activeTab === 'qr' ? 'active' : ''}`}
            onClick={() => setActiveTab('qr')}
          >
            <span className="tab-icon">📱</span>
            QR Code
          </button>
          <button 
            className={`tab-btn ${activeTab === 'upi' ? 'active' : ''}`}
            onClick={() => setActiveTab('upi')}
          >
            <span className="tab-icon">💳</span>
            UPI Details
          </button>
          <button 
            className={`tab-btn ${activeTab === 'bank' ? 'active' : ''}`}
            onClick={() => setActiveTab('bank')}
          >
            <span className="tab-icon">🏦</span>
            Bank Account
          </button>
        </div>

        <div className="donation-content">
          {activeTab === 'qr' && (
            <div className="qr-section">
              <div className="qr-container">
                <div className="qr-frame">
                  <img 
                    src="/images/donation-qr.jpg" 
                    alt="Donation QR Code"
                    className="qr-image"
                  />
                </div>
                <div className="qr-instructions">
                  <h3>QR Code से दान करें</h3>
                  <ul>
                    <li>अपने Phone की Camera या Payment App खोलें</li>
                    <li>QR Code को Scan करें</li>
                    <li>Amount डालें और Payment करें</li>
                    <li>श्री श्याम जी का आशीर्वाद प्राप्त करें</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'upi' && (
            <div className="upi-section">
              <div className="payment-card">
                <h3>UPI Payment Details</h3>
                <div className="detail-row">
                  <span className="label">UPI ID:</span>
                  <div className="value-container">
                    <span className="value">{upiDetails.upiId}</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(upiDetails.upiId, 'UPI ID')}
                    >
                      📋
                    </button>
                  </div>
                </div>
                <div className="detail-row">
                  <span className="label">Merchant Code:</span>
                  <div className="value-container">
                    <span className="value">{upiDetails.merchantCode}</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(upiDetails.merchantCode, 'Merchant Code')}
                    >
                      📋
                    </button>
                  </div>
                </div>
                <div className="upi-apps">
                  <p>Supported UPI Apps:</p>
                  <div className="app-icons">
                    <span className="app-name">Google Pay</span>
                    <span className="app-name">PhonePe</span>
                    <span className="app-name">Paytm</span>
                    <span className="app-name">BHIM</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bank' && (
            <div className="bank-section">
              <div className="payment-card">
                <h3>Bank Account Details</h3>
                <div className="detail-row">
                  <span className="label">Bank Name:</span>
                  <span className="value">{bankDetails.bankName}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Account Name:</span>
                  <span className="value">{bankDetails.accountName}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Account Number:</span>
                  <div className="value-container">
                    <span className="value">{bankDetails.accountNumber}</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(bankDetails.accountNumber, 'Account Number')}
                    >
                      📋
                    </button>
                  </div>
                </div>
                <div className="detail-row">
                  <span className="label">IFSC Code:</span>
                  <div className="value-container">
                    <span className="value">{bankDetails.ifscCode}</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(bankDetails.ifscCode, 'IFSC Code')}
                    >
                      📋
                    </button>
                  </div>
                </div>
                <div className="detail-row">
                  <span className="label">Branch:</span>
                  <span className="value">{bankDetails.branch}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="donation-footer">
          <div className="blessing-box">
            <p className="blessing-text">
              🙏 आपका दान मंदिर के विकास में सहायक होगा 🙏
            </p>
            <p className="blessing-subtext">
              Your donation will help in temple development
            </p>
          </div>
          
          <div className="donation-note">
            <p>
              <strong>नोट:</strong> सभी दान राशि का उपयोग मंदिर के रखरखाव, 
              पूजा-अर्चना और धार्मिक गतिविधियों के लिए किया जाएगा।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
