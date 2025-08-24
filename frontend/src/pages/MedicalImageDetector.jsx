import { useState } from 'react';
import { Camera, Upload, Scan, AlertTriangle, CheckCircle, Info, Eye, Download } from 'lucide-react';

const MedicalImageDetector = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [uploadMethod, setUploadMethod] = useState('file');

  const supportedFormats = ['JPEG', 'PNG', 'DICOM', 'TIFF'];
  const analysisTypes = [
    'X-Ray Analysis',
    'MRI Scan Review', 
    'CT Scan Analysis',
    'Skin Lesion Detection',
    'Retinal Imaging',
    'General Anomaly Detection'
  ];

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target.result);
      reader.readAsDataURL(file);
      setAnalysisResult(null);
    }
  };

  // Updated handleAnalyze to call backend
  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("https://ai-powered-medical-platform.onrender.com/predict/", {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error("Failed to analyze image");

      const data = await response.json();
      setAnalysisResult(data);
    } catch (error) {
      console.error(error);
      alert("Error analyzing image: " + error.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'var(--error-color)';
      case 'medium': return 'var(--warning-color)';
      case 'low': return 'var(--success-color)';
      default: return 'var(--text-secondary)';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'high': return <AlertTriangle size={20} />;
      case 'medium': return <Info size={20} />;
      case 'low': return <CheckCircle size={20} />;
      default: return <Info size={20} />;
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--background-color)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.9) 0%, rgba(45, 55, 72, 0.9) 100%), url("https://images.unsplash.com/photo-1582560469781-1965b9af903e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white', 
        padding: '4rem 0',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{
              width: '120px',
              height: '120px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              backdropFilter: 'blur(10px)',
              border: '3px solid rgba(255, 255, 255, 0.3)'
            }}>
              <Camera size={60} />
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              AI Medical Image Detector
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Advanced artificial intelligence for medical image analysis and early anomaly detection
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1rem' }}>
        {/* Disclaimer */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <AlertTriangle size={24} style={{ color: '#856404' }} />
          <div>
            <strong style={{ color: '#856404' }}>Important Medical Disclaimer:</strong>
            <p style={{ margin: '0.25rem 0 0 0', color: '#856404' }}>
              This tool is for educational purposes only. Always consult qualified healthcare professionals 
              for medical diagnosis and treatment decisions.
            </p>
          </div>
        </div>

        {/* Upload */}
        <div className="form-container" style={{ marginBottom: '3rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>
            Upload Medical Image for Analysis
          </h3>

          <div style={{
            border: '2px dashed var(--border-color)',
            borderRadius: '12px',
            padding: '3rem',
            textAlign: 'center',
            backgroundColor: 'var(--surface-color)',
            transition: 'all 0.3s ease'
          }}>
            <Upload size={48} style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }} />
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Drop your medical image here
            </h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              or click to browse files
            </p>
            <input
              type="file"
              accept="image/*,.dcm"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
              id="file-upload"
            />
            <label htmlFor="file-upload" className="btn btn-primary">
              Choose File
            </label>
          </div>

          {previewUrl && (
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <img src={previewUrl} alt="Preview" style={{ maxWidth: '400px', maxHeight: '400px', objectFit: 'contain', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
              <div style={{ marginTop: '1rem' }}>
                <button
                  className="btn btn-primary"
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  style={{ padding: '1rem 2rem', fontSize: '1.1rem', opacity: isAnalyzing ? 0.7 : 1 }}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Image"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {analysisResult && (
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-primary)' }}>AI Analysis Results</h3>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>Confidence: <strong>{analysisResult.confidence}%</strong></div>

            <div>
              {analysisResult.findings.map((finding, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', border: `2px solid ${getSeverityColor(finding.severity)}`, borderRadius: '8px', padding: '0.5rem' }}>
                  <div>{getSeverityIcon(finding.severity)}</div>
                  <div>
                    <strong>{finding.type}:</strong> {finding.description}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1rem' }}>
              <h4>Recommendations:</h4>
              <ul>
                {analysisResult.recommendations.map((rec, idx) => <li key={idx}>{rec}</li>)}
              </ul>
            </div>

            <div style={{ marginTop: '1rem', padding: '0.5rem', border: '1px solid #bee5eb', borderRadius: '8px', backgroundColor: '#e8f4fd' }}>
              <Info size={20} /> {analysisResult.disclaimer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalImageDetector;
