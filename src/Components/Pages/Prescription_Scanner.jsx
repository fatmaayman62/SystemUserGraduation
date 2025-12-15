import React, { useState } from 'react';
import { Camera, Upload, X, Pill, AlertCircle, Loader2 } from 'lucide-react';

export default function Prescription_Scanner() {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [medicines, setMedicines] = useState([]);
    const [error, setError] = useState(null);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            processFile(file);
        }
    };

    const processFile = (file) => {
        if (!file.type.startsWith('image/')) {
            setError('Please upload an image file');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            setPreview(e.target.result);
            setImage(e.target.result);
            setError(null);
            setMedicines([]);
        };
        reader.readAsDataURL(file);
    };

    const analyzePrescription = async () => {
        if (!image) return;

        setLoading(true);
        setError(null);

        try {
            const base64Data = image.split(',')[1];
            const mimeType = image.split(';')[0].split(':')[1];

            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'claude-sonnet-4-20250514',
                    max_tokens: 1000,
                    messages: [
                        {
                            role: 'user',
                            content: [
                                {
                                    type: 'image',
                                    source: {
                                        type: 'base64',
                                        media_type: mimeType,
                                        data: base64Data
                                    }
                                },
                                {
                                    type: 'text',
                                    text: `Analyze this prescription image and extract ALL medicine names you can find. Return ONLY a JSON array of objects with this structure, no other text:
[
  {
    "name": "Medicine name",
    "dosage": "Dosage if visible",
    "frequency": "Frequency if visible"
  }
]

If you cannot find any medicines or cannot read the prescription clearly, return an empty array [].`
                                }
                            ]
                        }
                    ]
                })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error.message || 'Failed to analyze prescription');
            }

            const textContent = data.content
                .filter(item => item.type === 'text')
                .map(item => item.text)
                .join('');

            const cleanText = textContent.replace(/```json|```/g, '').trim();
            const parsedMedicines = JSON.parse(cleanText);

            if (parsedMedicines.length === 0) {
                setError('No medicines found in the prescription. Please ensure the image is clear and contains a valid prescription.');
            } else {
                setMedicines(parsedMedicines);
            }
        } catch (err) {
            console.error('Error analyzing prescription:', err);
            setError('Failed to analyze prescription. Please try again with a clearer image.');
        } finally {
            setLoading(false);
        }
    };

    const clearImage = () => {
        setImage(null);
        setPreview(null);
        setMedicines([]);
        setError(null);
    };

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-4xl mx-auto ">
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 dark:bg-[#03173b]">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <div className="bg-indigo-100 p-4 rounded-full">
                                <Pill className="sm:w-12 w-10 sm:h-12 h-10 text-indigo-600" />
                            </div>
                        </div>
                        <h1 className="sm:text-2xl md:text-3xl text-[18px] font-bold text-gray-800  dark:text-white  mb-2">
                            Prescription Scanner
                        </h1>
                        <p className="text-gray-600 sm:text-[16px] text-[14px]">
                            Upload your prescription to identify medicines
                        </p>
                    </div>

                    {/* Upload Area */}
                    {!preview ? (
                        <div className="border-2 border-dashed border-indigo-300 rounded-xl sm:p-12 p-8 text-center hover:border-indigo-500 transition-colors">
                            <input
                                type="file"
                                id="file-upload"
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileSelect}
                            />
                            <label
                                htmlFor="file-upload"
                                className="cursor-pointer flex flex-col items-center"
                            >
                                <Upload className="sm:w-16 w-14 sm:h-16 h-14 text-indigo-400 mb-4" />
                                <span className="text-lg font-medium text-gray-700  dark:text-white  mb-2 sm:text-[16px] text-[14px]">
                                    Upload Prescription Image
                                </span>
                                <span className="text-sm text-gray-500">
                                    PNG, JPG up to 10MB
                                </span>
                            </label>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {/* Image Preview */}
                            <div className="relative">
                                <img
                                    src={preview}
                                    alt="Prescription"
                                    className="w-full rounded-lg shadow-md sm:max-h-96 max-h-80 object-contain bg-gray-50"
                                />
                                <button
                                    onClick={clearImage}
                                    className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Analyze Button */}
                            {!loading && medicines.length === 0 && (
                                <button
                                    onClick={analyzePrescription}
                                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Camera className="w-5 h-5" />
                                    Analyze Prescription
                                </button>
                            )}

                            {/* Loading State */}
                            {loading && (
                                <div className="flex items-center justify-center py-8">
                                    <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
                                    <span className="ml-3 text-gray-600">Analyzing prescription...</span>
                                </div>
                            )}

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <p className="text-red-700 text-sm">{error}</p>
                                </div>
                            )}

                            {/* Results */}
                            {medicines.length > 0 && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                        <Pill className="w-6 h-6 text-green-600" />
                                        Medicines Found ({medicines.length})
                                    </h2>
                                    <div className="space-y-3">
                                        {medicines.map((med, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-white rounded-lg p-4 shadow-sm border border-green-100"
                                            >
                                                <h3 className="font-semibold text-gray-800 text-lg mb-2">
                                                    {med.name}
                                                </h3>
                                                {med.dosage && (
                                                    <p className="text-sm text-gray-600">
                                                        <span className="font-medium">Dosage:</span> {med.dosage}
                                                    </p>
                                                )}
                                                {med.frequency && (
                                                    <p className="text-sm text-gray-600">
                                                        <span className="font-medium">Frequency:</span> {med.frequency}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        onClick={clearImage}
                                        className="mt-4 w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                                    >
                                        Scan Another Prescription
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Info Note */}
                    <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="sm:text-sm text-[12px] text-blue-800">
                            <strong>Note:</strong> This tool uses AI to identify medicines from prescription images.
                            Always consult with a healthcare professional before taking any medication.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}