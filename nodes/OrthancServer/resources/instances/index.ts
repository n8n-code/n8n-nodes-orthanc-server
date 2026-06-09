import type { INodeProperties } from 'n8n-workflow';

export const instancesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					]
				}
			},
			"options": [
				{
					"name": "GET Instances",
					"value": "GET Instances",
					"action": "List the available instances",
					"description": "List the Orthanc identifiers of all the available DICOM instances",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances"
						}
					}
				},
				{
					"name": "POST Instances",
					"value": "POST Instances",
					"action": "Upload DICOM instances",
					"description": "Upload DICOM instances",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/instances"
						}
					}
				},
				{
					"name": "DELETE Instances",
					"value": "DELETE Instances",
					"action": "Delete some instance",
					"description": "Delete the DICOM instance whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/instances/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "POST Instances Anonymize",
					"value": "POST Instances Anonymize",
					"action": "Anonymize instance",
					"description": "Download an anonymized version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#anonymization-of-a-single-instance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/instances/{{$parameter[\"id\"]}}/anonymize"
						}
					}
				},
				{
					"name": "GET Instances Attachments",
					"value": "GET Instances Attachments",
					"action": "List attachments",
					"description": "Get the list of attachments that are associated with the given instance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments"
						}
					}
				},
				{
					"name": "DELETE Instances Attachments",
					"value": "DELETE Instances Attachments",
					"action": "Delete attachment",
					"description": "Delete an attachment associated with the given DICOM instance. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "PUT Instances Attachments",
					"value": "PUT Instances Attachments",
					"action": "Set attachment",
					"description": "Attach a file to the given DICOM instance. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "POST Instances Attachments Compress",
					"value": "POST Instances Attachments Compress",
					"action": "Compress attachment",
					"description": "Change the compression scheme that is used to store an attachment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compress"
						}
					}
				},
				{
					"name": "GET Instances Attachments Compressed Data",
					"value": "GET Instances Attachments Compressed Data",
					"action": "Get attachment (no decompression)",
					"description": "Get the (binary) content of one attachment associated with the given instance. The attachment will not be decompressed if `StorageCompression` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compressed-data"
						}
					}
				},
				{
					"name": "GET Instances Attachments Compressed Md 5",
					"value": "GET Instances Attachments Compressed Md 5",
					"action": "Get MD5 of attachment on disk",
					"description": "Get the MD5 hash of one attachment associated with the given instance, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compressed-md5"
						}
					}
				},
				{
					"name": "GET Instances Attachments Compressed Size",
					"value": "GET Instances Attachments Compressed Size",
					"action": "Get size of attachment on disk",
					"description": "Get the size of one attachment associated with the given instance, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compressed-size"
						}
					}
				},
				{
					"name": "GET Instances Attachments Data",
					"value": "GET Instances Attachments Data",
					"action": "Get attachment",
					"description": "Get the (binary) content of one attachment associated with the given instance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/data"
						}
					}
				},
				{
					"name": "GET Instances Attachments Info",
					"value": "GET Instances Attachments Info",
					"action": "Get info about the attachment",
					"description": "Get all the information about the attachment associated with the given instance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/info"
						}
					}
				},
				{
					"name": "GET Instances Attachments Is Compressed",
					"value": "GET Instances Attachments Is Compressed",
					"action": "Is attachment compressed?",
					"description": "Test whether the attachment has been stored as a compressed file on the disk.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/is-compressed"
						}
					}
				},
				{
					"name": "GET Instances Attachments Md 5",
					"value": "GET Instances Attachments Md 5",
					"action": "Get MD5 of attachment",
					"description": "Get the MD5 hash of one attachment associated with the given instance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/md5"
						}
					}
				},
				{
					"name": "GET Instances Attachments Size",
					"value": "GET Instances Attachments Size",
					"action": "Get size of attachment",
					"description": "Get the size of one attachment associated with the given instance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/size"
						}
					}
				},
				{
					"name": "POST Instances Attachments Uncompress",
					"value": "POST Instances Attachments Uncompress",
					"action": "Uncompress attachment",
					"description": "Change the compression scheme that is used to store an attachment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/uncompress"
						}
					}
				},
				{
					"name": "POST Instances Attachments Verify Md 5",
					"value": "POST Instances Attachments Verify Md 5",
					"action": "Verify attachment",
					"description": "Verify that the attachment is not corrupted, by validating its MD5 hash",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/instances/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/verify-md5"
						}
					}
				},
				{
					"name": "GET Instances Content",
					"value": "GET Instances Content",
					"action": "Get raw tag",
					"description": "Get the raw content of one DICOM tag in the hierarchy of DICOM dataset",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/content"
						}
					}
				},
				{
					"name": "POST Instances Export",
					"value": "POST Instances Export",
					"action": "Write DICOM onto filesystem",
					"description": "Write the DICOM file onto the filesystem where Orthanc is running",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/instances/{{$parameter[\"id\"]}}/export"
						}
					}
				},
				{
					"name": "GET Instances File",
					"value": "GET Instances File",
					"action": "Download DICOM",
					"description": "Download one DICOM instance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/file"
						}
					}
				},
				{
					"name": "GET Instances Frames",
					"value": "GET Instances Frames",
					"action": "List available frames",
					"description": "List the frames that are available in the DICOM instance of interest",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/frames"
						}
					}
				},
				{
					"name": "GET Instances Frames Image Int 16",
					"value": "GET Instances Frames Image Int 16",
					"action": "Decode a frame (int16)",
					"description": "Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/frames/{{$parameter[\"frame\"]}}/image-int16"
						}
					}
				},
				{
					"name": "GET Instances Frames Image Uint 16",
					"value": "GET Instances Frames Image Uint 16",
					"action": "Decode a frame (uint16)",
					"description": "Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/frames/{{$parameter[\"frame\"]}}/image-uint16"
						}
					}
				},
				{
					"name": "GET Instances Frames Image Uint 8",
					"value": "GET Instances Frames Image Uint 8",
					"action": "Decode a frame (uint8)",
					"description": "Decode one frame of interest from the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/frames/{{$parameter[\"frame\"]}}/image-uint8"
						}
					}
				},
				{
					"name": "GET Instances Frames Matlab",
					"value": "GET Instances Frames Matlab",
					"action": "Decode frame for Matlab",
					"description": "Decode one frame of interest from the given DICOM instance, and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/frames/{{$parameter[\"frame\"]}}/matlab"
						}
					}
				},
				{
					"name": "GET Instances Frames Numpy",
					"value": "GET Instances Frames Numpy",
					"action": "Decode frame for numpy",
					"description": "Decode one frame of interest from the given DICOM instance, for use with numpy in Python. The numpy array has 3 dimensions: (height, width, color channel).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/frames/{{$parameter[\"frame\"]}}/numpy"
						}
					}
				},
				{
					"name": "GET Instances Frames Preview",
					"value": "GET Instances Frames Preview",
					"action": "Decode a frame (preview)",
					"description": "Decode one frame of interest from the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/frames/{{$parameter[\"frame\"]}}/preview"
						}
					}
				},
				{
					"name": "GET Instances Frames Raw",
					"value": "GET Instances Frames Raw",
					"action": "Access raw frame",
					"description": "Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/frames/{{$parameter[\"frame\"]}}/raw"
						}
					}
				},
				{
					"name": "GET Instances Frames Raw Gz",
					"value": "GET Instances Frames Raw Gz",
					"action": "Access raw frame (compressed)",
					"description": "Access the raw content of one individual frame of the DICOM instance of interest, bypassing image decoding. This is notably useful to access the source files in compressed transfer syntaxes. The image is compressed using gzip",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/frames/{{$parameter[\"frame\"]}}/raw.gz"
						}
					}
				},
				{
					"name": "GET Instances Frames Rendered",
					"value": "GET Instances Frames Rendered",
					"action": "Render a frame",
					"description": "Render one frame of interest from the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/frames/{{$parameter[\"frame\"]}}/rendered"
						}
					}
				},
				{
					"name": "GET Instances Header",
					"value": "GET Instances Header",
					"action": "Get DICOM meta-header",
					"description": "Get the DICOM tags in the meta-header of the DICOM instance. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/header"
						}
					}
				},
				{
					"name": "GET Instances Image Int 16",
					"value": "GET Instances Image Int 16",
					"action": "Decode an image (int16)",
					"description": "Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [-32768,32767] range. Negative values must be interpreted according to two's complement.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/image-int16"
						}
					}
				},
				{
					"name": "GET Instances Image Uint 16",
					"value": "GET Instances Image Uint 16",
					"action": "Decode an image (uint16)",
					"description": "Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,65535] range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/image-uint16"
						}
					}
				},
				{
					"name": "GET Instances Image Uint 8",
					"value": "GET Instances Image Uint 8",
					"action": "Decode an image (uint8)",
					"description": "Decode the first frame of the given DICOM instance. Pixels of grayscale images are truncated to the [0,255] range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/image-uint8"
						}
					}
				},
				{
					"name": "GET Instances Matlab",
					"value": "GET Instances Matlab",
					"action": "Decode frame for Matlab",
					"description": "Decode the first frame of the given DICOM instance., and export this frame as a Octave/Matlab matrix to be imported with `eval()`: https://book.orthanc-server.com/faq/matlab.html",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/matlab"
						}
					}
				},
				{
					"name": "GET Instances Metadata",
					"value": "GET Instances Metadata",
					"action": "List metadata",
					"description": "Get the list of metadata that are associated with the given instance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/metadata"
						}
					}
				},
				{
					"name": "DELETE Instances Metadata",
					"value": "DELETE Instances Metadata",
					"action": "Delete metadata",
					"description": "Delete some metadata associated with the given DICOM instance. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/instances/{{$parameter[\"id\"]}}/metadata/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "PUT Instances Metadata",
					"value": "PUT Instances Metadata",
					"action": "Set metadata",
					"description": "Set the value of some metadata in the given DICOM instance. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/instances/{{$parameter[\"id\"]}}/metadata/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "POST Instances Modify",
					"value": "POST Instances Modify",
					"action": "Modify instance",
					"description": "Download a modified version of the DICOM instance whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#modification-of-a-single-instance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/instances/{{$parameter[\"id\"]}}/modify"
						}
					}
				},
				{
					"name": "GET Instances Module",
					"value": "GET Instances Module",
					"action": "Get instance module",
					"description": "Get the instance module of the DICOM instance whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/module"
						}
					}
				},
				{
					"name": "GET Instances Numpy",
					"value": "GET Instances Numpy",
					"action": "Decode instance for numpy",
					"description": "Decode the given DICOM instance, for use with numpy in Python. The numpy array has 4 dimensions: (frame, height, width, color channel).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/numpy"
						}
					}
				},
				{
					"name": "GET Instances Patient",
					"value": "GET Instances Patient",
					"action": "Get parent patient",
					"description": "Get detailed information about the parent patient of the DICOM instance whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/patient"
						}
					}
				},
				{
					"name": "GET Instances PDF",
					"value": "GET Instances PDF",
					"action": "Get embedded PDF",
					"description": "Get the PDF file that is embedded in one DICOM instance. If the DICOM instance doesn't contain the `EncapsulatedDocument` tag or if the `MIMETypeOfEncapsulatedDocument` tag doesn't correspond to the PDF type, a `404` HTTP error is raised.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/pdf"
						}
					}
				},
				{
					"name": "GET Instances Preview",
					"value": "GET Instances Preview",
					"action": "Decode an image (preview)",
					"description": "Decode the first frame of the given DICOM instance. The full dynamic range of grayscale images is rescaled to the [0,255] range.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/preview"
						}
					}
				},
				{
					"name": "POST Instances Reconstruct",
					"value": "POST Instances Reconstruct",
					"action": "Reconstruct tags & optionally files of instance",
					"description": "Reconstruct the main DICOM tags in DB of the instance whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/instances/{{$parameter[\"id\"]}}/reconstruct"
						}
					}
				},
				{
					"name": "GET Instances Rendered",
					"value": "GET Instances Rendered",
					"action": "Render an image",
					"description": "Render the first frame of the given DICOM instance. This function takes scaling into account (`RescaleSlope` and `RescaleIntercept` tags), as well as the default windowing stored in the DICOM file (`WindowCenter` and `WindowWidth`tags), and can be used to resize the resulting image. Color images are not affected by windowing.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/rendered"
						}
					}
				},
				{
					"name": "GET Instances Series",
					"value": "GET Instances Series",
					"action": "Get parent series",
					"description": "Get detailed information about the parent series of the DICOM instance whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/series"
						}
					}
				},
				{
					"name": "GET Instances Simplified Tags",
					"value": "GET Instances Simplified Tags",
					"action": "Get human-readable tags",
					"description": "Get the DICOM tags in human-readable format (same as the `/instances/{id}/tags?simplify` route)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/simplified-tags"
						}
					}
				},
				{
					"name": "GET Instances Statistics",
					"value": "GET Instances Statistics",
					"action": "Get instance statistics",
					"description": "Get statistics about the given instance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/statistics"
						}
					}
				},
				{
					"name": "GET Instances Study",
					"value": "GET Instances Study",
					"action": "Get parent study",
					"description": "Get detailed information about the parent study of the DICOM instance whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/study"
						}
					}
				},
				{
					"name": "GET Instances Tags",
					"value": "GET Instances Tags",
					"action": "Get DICOM tags",
					"description": "Get the DICOM tags in the specified format. By default, the `full` format is used, which combines hexadecimal tags with human-readable description.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instances/{{$parameter[\"id\"]}}/tags"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "expand",
			"description": "If present, retrieve detailed information about the individual instances",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances"
					]
				}
			}
		},
		{
			"displayName": "Full",
			"name": "full",
			"description": "If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "full",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Limit the number of results",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances"
					]
				}
			}
		},
		{
			"displayName": "Requested Tags",
			"name": "requestedTags",
			"description": "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestedTags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances"
					]
				}
			}
		},
		{
			"displayName": "Short",
			"name": "short",
			"description": "If present, report the DICOM tags in hexadecimal format",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "short",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances"
					]
				}
			}
		},
		{
			"displayName": "Since",
			"name": "since",
			"description": "Show only the resources since the provided index",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "since",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /instances<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances"
					]
				}
			}
		},
		{
			"displayName": "DELETE /instances/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"DELETE Instances"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"DELETE Instances"
					]
				}
			}
		},
		{
			"displayName": "POST /instances/{id}/anonymize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Anonymize"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Dicom Version",
			"name": "DicomVersion",
			"type": "string",
			"default": "",
			"description": "Version of the DICOM standard to be used for anonymization. Check out configuration option `DeidentifyLogsDicomVersion` for possible values.",
			"routing": {
				"send": {
					"property": "DicomVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Force",
			"name": "Force",
			"type": "boolean",
			"default": true,
			"description": "Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world",
			"routing": {
				"send": {
					"property": "Force",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Keep",
			"name": "Keep",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of DICOM tags whose value must not be destroyed by the anonymization. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).",
			"routing": {
				"send": {
					"property": "Keep",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Keep Private Tags",
			"name": "KeepPrivateTags",
			"type": "boolean",
			"default": true,
			"description": "Keep the private tags from the DICOM instances (defaults to `false`)",
			"routing": {
				"send": {
					"property": "KeepPrivateTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Keep Source",
			"name": "KeepSource",
			"type": "boolean",
			"default": true,
			"description": "If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.",
			"routing": {
				"send": {
					"property": "KeepSource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Private Creator",
			"name": "PrivateCreator",
			"type": "string",
			"default": "",
			"description": "The private creator to be used for private tags in `Replace`",
			"routing": {
				"send": {
					"property": "PrivateCreator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Remove",
			"name": "Remove",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of additional tags to be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).",
			"routing": {
				"send": {
					"property": "Remove",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Replace",
			"name": "Replace",
			"type": "json",
			"default": "{}",
			"description": "Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).",
			"routing": {
				"send": {
					"property": "Replace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "Transcode",
			"type": "string",
			"default": "",
			"description": "Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html",
			"routing": {
				"send": {
					"property": "Transcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Anonymize"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "Full",
			"name": "full",
			"description": "If present, retrieve the attachments list and their numerical ids",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "full",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /instances/{id}/attachments/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"DELETE Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Revision of the attachment, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"DELETE Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"DELETE Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"DELETE Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "PUT /instances/{id}/attachments/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"PUT Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Revision of the attachment, if this is not the first time this attachment is set.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"PUT Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"PUT Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"PUT Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "PUT /instances/{id}/attachments/{name}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"PUT Instances Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /instances/{id}/attachments/{name}/compress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Attachments Compress"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Attachments Compress"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Attachments Compress"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/attachments/{name}/compressed-data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Compressed Data"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the metadata, to check if its content has changed",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Compressed Data"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Compressed Data"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Compressed Data"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/attachments/{name}/compressed-md5",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Compressed Md 5"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the attachment, to check if its content has changed",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Compressed Md 5"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Compressed Md 5"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Compressed Md 5"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/attachments/{name}/compressed-size",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Compressed Size"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the attachment, to check if its content has changed",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Compressed Size"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Compressed Size"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Compressed Size"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/attachments/{name}/data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Data"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the metadata, to check if its content has changed",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Data"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Data"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Data"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/attachments/{name}/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Info"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the attachment, to check if its content has changed",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Info"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Info"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Info"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/attachments/{name}/is-compressed",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Is Compressed"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the attachment, to check if its content has changed",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Is Compressed"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Is Compressed"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Is Compressed"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/attachments/{name}/md5",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Md 5"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the attachment, to check if its content has changed",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Md 5"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Md 5"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Md 5"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/attachments/{name}/size",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Size"
					]
				}
			}
		},
		{
			"displayName": "If None Match",
			"name": "If-None-Match",
			"description": "Optional revision of the attachment, to check if its content has changed",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-None-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Size"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Size"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Attachments Size"
					]
				}
			}
		},
		{
			"displayName": "POST /instances/{id}/attachments/{name}/uncompress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Attachments Uncompress"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Attachments Uncompress"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Attachments Uncompress"
					]
				}
			}
		},
		{
			"displayName": "POST /instances/{id}/attachments/{name}/verify-md5",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Attachments Verify Md 5"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Attachments Verify Md 5"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the attachment, or its index (cf. `UserContentType` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Attachments Verify Md 5"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Content"
					]
				}
			}
		},
		{
			"displayName": "",
			"name": "---",
			"required": true,
			"description": "Path to the DICOM tag. This is the interleaving of one DICOM tag, possibly followed by an index for sequences. Sequences are accessible as, for instance, `/0008-1140/1/0008-1150`",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "...",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Content"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Content"
					]
				}
			}
		},
		{
			"displayName": "POST /instances/{id}/export",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Export"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Export"
					]
				}
			}
		},
		{
			"displayName": "POST /instances/{id}/export<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Export"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances File"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "This HTTP header can be set to retrieve the DICOM instance in DICOMweb format",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances File"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances File"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/frames",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/frames/{frame}/image-int16",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Int 16"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Quality for JPEG images (between 1 and 100, defaults to 90)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quality",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Int 16"
					]
				}
			}
		},
		{
			"displayName": "Return Unsupported Image",
			"name": "returnUnsupportedImage",
			"description": "Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "returnUnsupportedImage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Int 16"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Int 16"
					]
				}
			}
		},
		{
			"displayName": "Frame",
			"name": "frame",
			"required": true,
			"description": "Index of the frame (starts at `0`)",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Int 16"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Int 16"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/frames/{frame}/image-uint16",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Uint 16"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Quality for JPEG images (between 1 and 100, defaults to 90)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quality",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Uint 16"
					]
				}
			}
		},
		{
			"displayName": "Return Unsupported Image",
			"name": "returnUnsupportedImage",
			"description": "Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "returnUnsupportedImage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Uint 16"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Uint 16"
					]
				}
			}
		},
		{
			"displayName": "Frame",
			"name": "frame",
			"required": true,
			"description": "Index of the frame (starts at `0`)",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Uint 16"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Uint 16"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/frames/{frame}/image-uint8",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Uint 8"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Quality for JPEG images (between 1 and 100, defaults to 90)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quality",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Uint 8"
					]
				}
			}
		},
		{
			"displayName": "Return Unsupported Image",
			"name": "returnUnsupportedImage",
			"description": "Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "returnUnsupportedImage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Uint 8"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Uint 8"
					]
				}
			}
		},
		{
			"displayName": "Frame",
			"name": "frame",
			"required": true,
			"description": "Index of the frame (starts at `0`)",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Uint 8"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Image Uint 8"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/frames/{frame}/matlab",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Matlab"
					]
				}
			}
		},
		{
			"displayName": "Frame",
			"name": "frame",
			"required": true,
			"description": "Index of the frame (starts at `0`)",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Matlab"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Matlab"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/frames/{frame}/numpy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Numpy"
					]
				}
			}
		},
		{
			"displayName": "Compress",
			"name": "compress",
			"description": "Compress the file as `.npz`",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "compress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Numpy"
					]
				}
			}
		},
		{
			"displayName": "Rescale",
			"name": "rescale",
			"description": "On grayscale images, apply the rescaling and return floating-point values",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "rescale",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Numpy"
					]
				}
			}
		},
		{
			"displayName": "Frame",
			"name": "frame",
			"required": true,
			"description": "Index of the frame (starts at `0`)",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Numpy"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM resource of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Numpy"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/frames/{frame}/preview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Preview"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Quality for JPEG images (between 1 and 100, defaults to 90)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quality",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Preview"
					]
				}
			}
		},
		{
			"displayName": "Return Unsupported Image",
			"name": "returnUnsupportedImage",
			"description": "Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "returnUnsupportedImage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Preview"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Preview"
					]
				}
			}
		},
		{
			"displayName": "Frame",
			"name": "frame",
			"required": true,
			"description": "Index of the frame (starts at `0`)",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Preview"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Preview"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/frames/{frame}/raw",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Raw"
					]
				}
			}
		},
		{
			"displayName": "Frame",
			"name": "frame",
			"required": true,
			"description": "Index of the frame (starts at `0`)",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Raw"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Raw"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/frames/{frame}/raw.gz",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Raw Gz"
					]
				}
			}
		},
		{
			"displayName": "Frame",
			"name": "frame",
			"required": true,
			"description": "Index of the frame (starts at `0`)",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Raw Gz"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Raw Gz"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/frames/{frame}/rendered",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Rendered"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"description": "Height of the resized image",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "height",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Rendered"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Quality for JPEG images (between 1 and 100, defaults to 90)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quality",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Rendered"
					]
				}
			}
		},
		{
			"displayName": "Return Unsupported Image",
			"name": "returnUnsupportedImage",
			"description": "Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "returnUnsupportedImage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Rendered"
					]
				}
			}
		},
		{
			"displayName": "Smooth",
			"name": "smooth",
			"description": "Whether to smooth image on resize",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "smooth",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Rendered"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"description": "Width of the resized image",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "width",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Rendered"
					]
				}
			}
		},
		{
			"displayName": "Window Center",
			"name": "window-center",
			"description": "Windowing center",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "window-center",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Rendered"
					]
				}
			}
		},
		{
			"displayName": "Window Width",
			"name": "window-width",
			"description": "Windowing width",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "window-width",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Rendered"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Rendered"
					]
				}
			}
		},
		{
			"displayName": "Frame",
			"name": "frame",
			"required": true,
			"description": "Index of the frame (starts at `0`)",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Rendered"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Frames Rendered"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/header",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Header"
					]
				}
			}
		},
		{
			"displayName": "Short",
			"name": "short",
			"description": "If present, report the DICOM tags in hexadecimal format",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "short",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Header"
					]
				}
			}
		},
		{
			"displayName": "Simplify",
			"name": "simplify",
			"description": "If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "simplify",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Header"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Header"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/image-int16",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Int 16"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Quality for JPEG images (between 1 and 100, defaults to 90)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quality",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Int 16"
					]
				}
			}
		},
		{
			"displayName": "Return Unsupported Image",
			"name": "returnUnsupportedImage",
			"description": "Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "returnUnsupportedImage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Int 16"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Int 16"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Int 16"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/image-uint16",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Uint 16"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Quality for JPEG images (between 1 and 100, defaults to 90)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quality",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Uint 16"
					]
				}
			}
		},
		{
			"displayName": "Return Unsupported Image",
			"name": "returnUnsupportedImage",
			"description": "Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "returnUnsupportedImage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Uint 16"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Uint 16"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Uint 16"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/image-uint8",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Uint 8"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Quality for JPEG images (between 1 and 100, defaults to 90)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quality",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Uint 8"
					]
				}
			}
		},
		{
			"displayName": "Return Unsupported Image",
			"name": "returnUnsupportedImage",
			"description": "Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "returnUnsupportedImage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Uint 8"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Uint 8"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Image Uint 8"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/matlab",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Matlab"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Matlab"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Metadata"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "expand",
			"description": "If present, also retrieve the value of the individual metadata",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Metadata"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Metadata"
					]
				}
			}
		},
		{
			"displayName": "DELETE /instances/{id}/metadata/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"DELETE Instances Metadata"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Revision of the metadata, to check if its content has not changed and can be deleted. This header is mandatory if `CheckRevisions` option is `true`.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"DELETE Instances Metadata"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"DELETE Instances Metadata"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the metadata, or its index (cf. `UserMetadata` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"DELETE Instances Metadata"
					]
				}
			}
		},
		{
			"displayName": "PUT /instances/{id}/metadata/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"PUT Instances Metadata"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Revision of the metadata, if this is not the first time this metadata is set.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"PUT Instances Metadata"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"PUT Instances Metadata"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "The name of the metadata, or its index (cf. `UserMetadata` configuration option)",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"PUT Instances Metadata"
					]
				}
			}
		},
		{
			"displayName": "PUT /instances/{id}/metadata/{name}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"PUT Instances Metadata"
					]
				}
			}
		},
		{
			"displayName": "POST /instances/{id}/modify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Modify"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Modify"
					]
				}
			}
		},
		{
			"displayName": "Force",
			"name": "Force",
			"type": "boolean",
			"default": true,
			"description": "Allow the modification of tags related to DICOM identifiers, at the risk of breaking the DICOM model of the real world",
			"routing": {
				"send": {
					"property": "Force",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Modify"
					]
				}
			}
		},
		{
			"displayName": "Keep",
			"name": "Keep",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Keep the original value of the specified tags, to be chosen among the `StudyInstanceUID`, `SeriesInstanceUID` and `SOPInstanceUID` tags. Avoid this feature as much as possible, as this breaks the DICOM model of the real world.",
			"routing": {
				"send": {
					"property": "Keep",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Modify"
					]
				}
			}
		},
		{
			"displayName": "Keep Source",
			"name": "KeepSource",
			"type": "boolean",
			"default": true,
			"description": "If set to `false`, instructs Orthanc to the remove original resources. By default, the original resources are kept in Orthanc.",
			"routing": {
				"send": {
					"property": "KeepSource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Modify"
					]
				}
			}
		},
		{
			"displayName": "Private Creator",
			"name": "PrivateCreator",
			"type": "string",
			"default": "",
			"description": "The private creator to be used for private tags in `Replace`",
			"routing": {
				"send": {
					"property": "PrivateCreator",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Modify"
					]
				}
			}
		},
		{
			"displayName": "Remove",
			"name": "Remove",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of tags that must be removed from the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).",
			"routing": {
				"send": {
					"property": "Remove",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Modify"
					]
				}
			}
		},
		{
			"displayName": "Remove Private Tags",
			"name": "RemovePrivateTags",
			"type": "boolean",
			"default": true,
			"description": "Remove the private tags from the DICOM instances (defaults to `false`)",
			"routing": {
				"send": {
					"property": "RemovePrivateTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Modify"
					]
				}
			}
		},
		{
			"displayName": "Replace",
			"name": "Replace",
			"type": "json",
			"default": "{}",
			"description": "Associative array to change the value of some DICOM tags in the DICOM instances. Starting with Orthanc 1.9.4, paths to subsequences can be provided using the same syntax as the `dcmodify` command-line tool (wildcards are supported as well).",
			"routing": {
				"send": {
					"property": "Replace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Modify"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "Transcode",
			"type": "string",
			"default": "",
			"description": "Transcode the DICOM instances to the provided DICOM transfer syntax: https://book.orthanc-server.com/faq/transcoding.html",
			"routing": {
				"send": {
					"property": "Transcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Modify"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/module",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Module"
					]
				}
			}
		},
		{
			"displayName": "Ignore Length",
			"name": "ignore-length",
			"description": "Also include the DICOM tags that are provided in this list, even if their associated value is long",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "ignore-length",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Module"
					]
				}
			}
		},
		{
			"displayName": "Short",
			"name": "short",
			"description": "If present, report the DICOM tags in hexadecimal format",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "short",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Module"
					]
				}
			}
		},
		{
			"displayName": "Simplify",
			"name": "simplify",
			"description": "If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "simplify",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Module"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Module"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/numpy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Numpy"
					]
				}
			}
		},
		{
			"displayName": "Compress",
			"name": "compress",
			"description": "Compress the file as `.npz`",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "compress",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Numpy"
					]
				}
			}
		},
		{
			"displayName": "Rescale",
			"name": "rescale",
			"description": "On grayscale images, apply the rescaling and return floating-point values",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "rescale",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Numpy"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM resource of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Numpy"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/patient",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Patient"
					]
				}
			}
		},
		{
			"displayName": "Full",
			"name": "full",
			"description": "If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "full",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Patient"
					]
				}
			}
		},
		{
			"displayName": "Requested Tags",
			"name": "requestedTags",
			"description": "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestedTags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Patient"
					]
				}
			}
		},
		{
			"displayName": "Short",
			"name": "short",
			"description": "If present, report the DICOM tags in hexadecimal format",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "short",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Patient"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Patient"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/pdf",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances PDF"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances PDF"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/preview",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Preview"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Quality for JPEG images (between 1 and 100, defaults to 90)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quality",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Preview"
					]
				}
			}
		},
		{
			"displayName": "Return Unsupported Image",
			"name": "returnUnsupportedImage",
			"description": "Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "returnUnsupportedImage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Preview"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Preview"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Preview"
					]
				}
			}
		},
		{
			"displayName": "POST /instances/{id}/reconstruct",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Reconstruct"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Reconstruct"
					]
				}
			}
		},
		{
			"displayName": "Reconstruct Files",
			"name": "ReconstructFiles",
			"type": "boolean",
			"default": true,
			"description": "Also reconstruct the files of the resources (e.g: apply IngestTranscoding, StorageCompression). 'false' by default. (New in Orthanc 1.11.0)",
			"routing": {
				"send": {
					"property": "ReconstructFiles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"POST Instances Reconstruct"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/rendered",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Rendered"
					]
				}
			}
		},
		{
			"displayName": "Height",
			"name": "height",
			"description": "Height of the resized image",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "height",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Rendered"
					]
				}
			}
		},
		{
			"displayName": "Quality",
			"name": "quality",
			"description": "Quality for JPEG images (between 1 and 100, defaults to 90)",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "quality",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Rendered"
					]
				}
			}
		},
		{
			"displayName": "Return Unsupported Image",
			"name": "returnUnsupportedImage",
			"description": "Returns an unsupported.png placeholder image if unable to provide the image instead of returning a 415 HTTP error (defaults to false)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "returnUnsupportedImage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Rendered"
					]
				}
			}
		},
		{
			"displayName": "Smooth",
			"name": "smooth",
			"description": "Whether to smooth image on resize",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "smooth",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Rendered"
					]
				}
			}
		},
		{
			"displayName": "Width",
			"name": "width",
			"description": "Width of the resized image",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "width",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Rendered"
					]
				}
			}
		},
		{
			"displayName": "Window Center",
			"name": "window-center",
			"description": "Windowing center",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "window-center",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Rendered"
					]
				}
			}
		},
		{
			"displayName": "Window Width",
			"name": "window-width",
			"description": "Windowing width",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "window-width",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Rendered"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "Format of the resulting image. Can be `image/png` (default), `image/jpeg` or `image/x-portable-arbitrarymap`",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Rendered"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Rendered"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/series",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Series"
					]
				}
			}
		},
		{
			"displayName": "Full",
			"name": "full",
			"description": "If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "full",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Series"
					]
				}
			}
		},
		{
			"displayName": "Requested Tags",
			"name": "requestedTags",
			"description": "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestedTags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Series"
					]
				}
			}
		},
		{
			"displayName": "Short",
			"name": "short",
			"description": "If present, report the DICOM tags in hexadecimal format",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "short",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Series"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Series"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/simplified-tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Simplified Tags"
					]
				}
			}
		},
		{
			"displayName": "Ignore Length",
			"name": "ignore-length",
			"description": "Also include the DICOM tags that are provided in this list, even if their associated value is long",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "ignore-length",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Simplified Tags"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Simplified Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/statistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Statistics"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Statistics"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/study",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Study"
					]
				}
			}
		},
		{
			"displayName": "Full",
			"name": "full",
			"description": "If present, report the DICOM tags in full format (tags indexed by their hexadecimal format, associated with their symbolic name and their value)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "full",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Study"
					]
				}
			}
		},
		{
			"displayName": "Requested Tags",
			"name": "requestedTags",
			"description": "If present, list the DICOM Tags you want to list in the response.  This argument is a semi-column separated list of DICOM Tags identifiers; e.g: 'requestedTags=0010,0010;PatientBirthDate'.  The tags requested tags are returned in the 'RequestedTags' field in the response.  Note that, if you are requesting tags that are not listed in the Main Dicom Tags stored in DB, building the response might be slow since Orthanc will need to access the DICOM files.  If not specified, Orthanc will return ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "requestedTags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Study"
					]
				}
			}
		},
		{
			"displayName": "Short",
			"name": "short",
			"description": "If present, report the DICOM tags in hexadecimal format",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "short",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Study"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Study"
					]
				}
			}
		},
		{
			"displayName": "GET /instances/{id}/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Tags"
					]
				}
			}
		},
		{
			"displayName": "Ignore Length",
			"name": "ignore-length",
			"description": "Also include the DICOM tags that are provided in this list, even if their associated value is long",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "ignore-length",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Tags"
					]
				}
			}
		},
		{
			"displayName": "Short",
			"name": "short",
			"description": "If present, report the DICOM tags in hexadecimal format",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "short",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Tags"
					]
				}
			}
		},
		{
			"displayName": "Simplify",
			"name": "simplify",
			"description": "If present, report the DICOM tags in human-readable format (using the symbolic name of the tags)",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "simplify",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Tags"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM instance of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instances"
					],
					"operation": [
						"GET Instances Tags"
					]
				}
			}
		},
];
