import type { INodeProperties } from 'n8n-workflow';

export const seriesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					]
				}
			},
			"options": [
				{
					"name": "GET Series",
					"value": "GET Series",
					"action": "List the available series",
					"description": "List the Orthanc identifiers of all the available DICOM series",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series"
						}
					}
				},
				{
					"name": "DELETE Series",
					"value": "DELETE Series",
					"action": "Delete some series",
					"description": "Delete the DICOM series whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/series/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "POST Series Anonymize",
					"value": "POST Series Anonymize",
					"action": "Anonymize series",
					"description": "Start a job that will anonymize all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/series/{{$parameter[\"id\"]}}/anonymize"
						}
					}
				},
				{
					"name": "GET Series Archive",
					"value": "GET Series Archive",
					"action": "Create ZIP archive",
					"description": "Synchronously create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/archive"
						}
					}
				},
				{
					"name": "POST Series Archive",
					"value": "POST Series Archive",
					"action": "Create ZIP archive",
					"description": "Create a ZIP archive containing the DICOM series whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/series/{{$parameter[\"id\"]}}/archive"
						}
					}
				},
				{
					"name": "GET Series Attachments",
					"value": "GET Series Attachments",
					"action": "List attachments",
					"description": "Get the list of attachments that are associated with the given series",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments"
						}
					}
				},
				{
					"name": "DELETE Series Attachments",
					"value": "DELETE Series Attachments",
					"action": "Delete attachment",
					"description": "Delete an attachment associated with the given DICOM series. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "PUT Series Attachments",
					"value": "PUT Series Attachments",
					"action": "Set attachment",
					"description": "Attach a file to the given DICOM series. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "POST Series Attachments Compress",
					"value": "POST Series Attachments Compress",
					"action": "Compress attachment",
					"description": "Change the compression scheme that is used to store an attachment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compress"
						}
					}
				},
				{
					"name": "GET Series Attachments Compressed Data",
					"value": "GET Series Attachments Compressed Data",
					"action": "Get attachment (no decompression)",
					"description": "Get the (binary) content of one attachment associated with the given series. The attachment will not be decompressed if `StorageCompression` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compressed-data"
						}
					}
				},
				{
					"name": "GET Series Attachments Compressed Md 5",
					"value": "GET Series Attachments Compressed Md 5",
					"action": "Get MD5 of attachment on disk",
					"description": "Get the MD5 hash of one attachment associated with the given series, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compressed-md5"
						}
					}
				},
				{
					"name": "GET Series Attachments Compressed Size",
					"value": "GET Series Attachments Compressed Size",
					"action": "Get size of attachment on disk",
					"description": "Get the size of one attachment associated with the given series, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compressed-size"
						}
					}
				},
				{
					"name": "GET Series Attachments Data",
					"value": "GET Series Attachments Data",
					"action": "Get attachment",
					"description": "Get the (binary) content of one attachment associated with the given series",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/data"
						}
					}
				},
				{
					"name": "GET Series Attachments Info",
					"value": "GET Series Attachments Info",
					"action": "Get info about the attachment",
					"description": "Get all the information about the attachment associated with the given series",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/info"
						}
					}
				},
				{
					"name": "GET Series Attachments Is Compressed",
					"value": "GET Series Attachments Is Compressed",
					"action": "Is attachment compressed?",
					"description": "Test whether the attachment has been stored as a compressed file on the disk.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/is-compressed"
						}
					}
				},
				{
					"name": "GET Series Attachments Md 5",
					"value": "GET Series Attachments Md 5",
					"action": "Get MD5 of attachment",
					"description": "Get the MD5 hash of one attachment associated with the given series",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/md5"
						}
					}
				},
				{
					"name": "GET Series Attachments Size",
					"value": "GET Series Attachments Size",
					"action": "Get size of attachment",
					"description": "Get the size of one attachment associated with the given series",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/size"
						}
					}
				},
				{
					"name": "POST Series Attachments Uncompress",
					"value": "POST Series Attachments Uncompress",
					"action": "Uncompress attachment",
					"description": "Change the compression scheme that is used to store an attachment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/uncompress"
						}
					}
				},
				{
					"name": "POST Series Attachments Verify Md 5",
					"value": "POST Series Attachments Verify Md 5",
					"action": "Verify attachment",
					"description": "Verify that the attachment is not corrupted, by validating its MD5 hash",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/series/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/verify-md5"
						}
					}
				},
				{
					"name": "GET Series Instances",
					"value": "GET Series Instances",
					"action": "Get child instances",
					"description": "Get detailed information about the child instances of the DICOM series whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/instances"
						}
					}
				},
				{
					"name": "GET Series Instances Tags",
					"value": "GET Series Instances Tags",
					"action": "Get tags of instances",
					"description": "Get the tags of all the child instances of the DICOM series whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/instances-tags"
						}
					}
				},
				{
					"name": "GET Series Media",
					"value": "GET Series Media",
					"action": "Create DICOMDIR media",
					"description": "Synchronously create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/media"
						}
					}
				},
				{
					"name": "POST Series Media",
					"value": "POST Series Media",
					"action": "Create DICOMDIR media",
					"description": "Create a DICOMDIR media containing the DICOM series whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/series/{{$parameter[\"id\"]}}/media"
						}
					}
				},
				{
					"name": "GET Series Metadata",
					"value": "GET Series Metadata",
					"action": "List metadata",
					"description": "Get the list of metadata that are associated with the given series",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/metadata"
						}
					}
				},
				{
					"name": "DELETE Series Metadata",
					"value": "DELETE Series Metadata",
					"action": "Delete metadata",
					"description": "Delete some metadata associated with the given DICOM series. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/series/{{$parameter[\"id\"]}}/metadata/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "PUT Series Metadata",
					"value": "PUT Series Metadata",
					"action": "Set metadata",
					"description": "Set the value of some metadata in the given DICOM series. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/series/{{$parameter[\"id\"]}}/metadata/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "POST Series Modify",
					"value": "POST Series Modify",
					"action": "Modify series",
					"description": "Start a job that will modify all the DICOM instances within the series whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new series, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/series/{{$parameter[\"id\"]}}/modify"
						}
					}
				},
				{
					"name": "GET Series Module",
					"value": "GET Series Module",
					"action": "Get series module",
					"description": "Get the series module of the DICOM series whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/module"
						}
					}
				},
				{
					"name": "GET Series Numpy",
					"value": "GET Series Numpy",
					"action": "Decode series for numpy",
					"description": "Decode the given DICOM series, for use with numpy in Python. The numpy array has 4 dimensions: (frame, height, width, color channel).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/numpy"
						}
					}
				},
				{
					"name": "GET Series Patient",
					"value": "GET Series Patient",
					"action": "Get parent patient",
					"description": "Get detailed information about the parent patient of the DICOM series whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/patient"
						}
					}
				},
				{
					"name": "POST Series Reconstruct",
					"value": "POST Series Reconstruct",
					"action": "Reconstruct tags & optionally files of series",
					"description": "Reconstruct the main DICOM tags in DB of the series whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/series/{{$parameter[\"id\"]}}/reconstruct"
						}
					}
				},
				{
					"name": "GET Series Shared Tags",
					"value": "GET Series Shared Tags",
					"action": "Get shared tags",
					"description": "Extract the DICOM tags whose value is constant across all the child instances of the DICOM series whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/shared-tags"
						}
					}
				},
				{
					"name": "GET Series Statistics",
					"value": "GET Series Statistics",
					"action": "Get series statistics",
					"description": "Get statistics about the given series",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/statistics"
						}
					}
				},
				{
					"name": "GET Series Study",
					"value": "GET Series Study",
					"action": "Get parent study",
					"description": "Get detailed information about the parent study of the DICOM series whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/series/{{$parameter[\"id\"]}}/study"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /series",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "expand",
			"description": "If present, retrieve detailed information about the individual series",
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
						"Series"
					],
					"operation": [
						"GET Series"
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
						"Series"
					],
					"operation": [
						"GET Series"
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
						"Series"
					],
					"operation": [
						"GET Series"
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
						"Series"
					],
					"operation": [
						"GET Series"
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
						"Series"
					],
					"operation": [
						"GET Series"
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
						"Series"
					],
					"operation": [
						"GET Series"
					]
				}
			}
		},
		{
			"displayName": "DELETE /series/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"DELETE Series"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"DELETE Series"
					]
				}
			}
		},
		{
			"displayName": "POST /series/{id}/anonymize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Asynchronous",
			"name": "Asynchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.",
			"routing": {
				"send": {
					"property": "Asynchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
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
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
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
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
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
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
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
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
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
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Permissive",
			"name": "Permissive",
			"type": "boolean",
			"default": true,
			"description": "If `true`, ignore errors during the individual steps of the job.",
			"routing": {
				"send": {
					"property": "Permissive",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "Priority",
			"type": "number",
			"default": 0,
			"description": "In asynchronous mode, the priority of the job. The lower the value, the higher the priority.",
			"routing": {
				"send": {
					"property": "Priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
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
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
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
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
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
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
					]
				}
			}
		},
		{
			"displayName": "Synchronous",
			"name": "Synchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.",
			"routing": {
				"send": {
					"property": "Synchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
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
						"Series"
					],
					"operation": [
						"POST Series Anonymize"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Archive"
					]
				}
			}
		},
		{
			"displayName": "Filename",
			"name": "filename",
			"description": "Filename to set in the \"Content-Disposition\" HTTP header (including file extension)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filename",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Archive"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "transcode",
			"description": "If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "transcode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Archive"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Archive"
					]
				}
			}
		},
		{
			"displayName": "POST /series/{id}/archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Archive"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Archive"
					]
				}
			}
		},
		{
			"displayName": "Asynchronous",
			"name": "Asynchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.",
			"routing": {
				"send": {
					"property": "Asynchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Archive"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "Priority",
			"type": "number",
			"default": 0,
			"description": "In asynchronous mode, the priority of the job. The lower the value, the higher the priority.",
			"routing": {
				"send": {
					"property": "Priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Archive"
					]
				}
			}
		},
		{
			"displayName": "Synchronous",
			"name": "Synchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option \"SynchronousZipStream\" is set to \"false\", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.",
			"routing": {
				"send": {
					"property": "Synchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Archive"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "Transcode",
			"type": "string",
			"default": "",
			"description": "If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html",
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
						"Series"
					],
					"operation": [
						"POST Series Archive"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /series/{id}/attachments/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"DELETE Series Attachments"
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
						"Series"
					],
					"operation": [
						"DELETE Series Attachments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"DELETE Series Attachments"
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
						"Series"
					],
					"operation": [
						"DELETE Series Attachments"
					]
				}
			}
		},
		{
			"displayName": "PUT /series/{id}/attachments/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"PUT Series Attachments"
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
						"Series"
					],
					"operation": [
						"PUT Series Attachments"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"PUT Series Attachments"
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
						"Series"
					],
					"operation": [
						"PUT Series Attachments"
					]
				}
			}
		},
		{
			"displayName": "PUT /series/{id}/attachments/{name}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"PUT Series Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /series/{id}/attachments/{name}/compress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Attachments Compress"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Attachments Compress"
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
						"Series"
					],
					"operation": [
						"POST Series Attachments Compress"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/attachments/{name}/compressed-data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Compressed Data"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Compressed Data"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Compressed Data"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Compressed Data"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/attachments/{name}/compressed-md5",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Compressed Md 5"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Compressed Md 5"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Compressed Md 5"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Compressed Md 5"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/attachments/{name}/compressed-size",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Compressed Size"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Compressed Size"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Compressed Size"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Compressed Size"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/attachments/{name}/data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Data"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Data"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Data"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Data"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/attachments/{name}/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Info"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Info"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Info"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Info"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/attachments/{name}/is-compressed",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Is Compressed"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Is Compressed"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Is Compressed"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Is Compressed"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/attachments/{name}/md5",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Md 5"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Md 5"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Md 5"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Md 5"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/attachments/{name}/size",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Size"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Size"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Attachments Size"
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
						"Series"
					],
					"operation": [
						"GET Series Attachments Size"
					]
				}
			}
		},
		{
			"displayName": "POST /series/{id}/attachments/{name}/uncompress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Attachments Uncompress"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Attachments Uncompress"
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
						"Series"
					],
					"operation": [
						"POST Series Attachments Uncompress"
					]
				}
			}
		},
		{
			"displayName": "POST /series/{id}/attachments/{name}/verify-md5",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Attachments Verify Md 5"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Attachments Verify Md 5"
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
						"Series"
					],
					"operation": [
						"POST Series Attachments Verify Md 5"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Instances"
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
						"Series"
					],
					"operation": [
						"GET Series Instances"
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
						"Series"
					],
					"operation": [
						"GET Series Instances"
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
						"Series"
					],
					"operation": [
						"GET Series Instances"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/instances-tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Instances Tags"
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
						"Series"
					],
					"operation": [
						"GET Series Instances Tags"
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
						"Series"
					],
					"operation": [
						"GET Series Instances Tags"
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
						"Series"
					],
					"operation": [
						"GET Series Instances Tags"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Instances Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/media",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Media"
					]
				}
			}
		},
		{
			"displayName": "Extended",
			"name": "extended",
			"description": "If present, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "extended",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Media"
					]
				}
			}
		},
		{
			"displayName": "Filename",
			"name": "filename",
			"description": "Filename to set in the \"Content-Disposition\" HTTP header (including file extension)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filename",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Media"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "transcode",
			"description": "If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "transcode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Media"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Media"
					]
				}
			}
		},
		{
			"displayName": "POST /series/{id}/media",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Media"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Media"
					]
				}
			}
		},
		{
			"displayName": "Asynchronous",
			"name": "Asynchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, create the archive in asynchronous mode, which means that a job is submitted to create the archive in background.",
			"routing": {
				"send": {
					"property": "Asynchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Media"
					]
				}
			}
		},
		{
			"displayName": "Extended",
			"name": "Extended",
			"type": "boolean",
			"default": true,
			"description": "If `true`, will include additional tags such as `SeriesDescription`, leading to a so-called *extended DICOMDIR*. Default value is `false`.",
			"routing": {
				"send": {
					"property": "Extended",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Media"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "Priority",
			"type": "number",
			"default": 0,
			"description": "In asynchronous mode, the priority of the job. The lower the value, the higher the priority.",
			"routing": {
				"send": {
					"property": "Priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Media"
					]
				}
			}
		},
		{
			"displayName": "Synchronous",
			"name": "Synchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, create the archive in synchronous mode, which means that the HTTP answer will directly contain the ZIP file. This is the default, easy behavior. However, if global configuration option \"SynchronousZipStream\" is set to \"false\", asynchronous transfers should be preferred for large amount of data, as the creation of the temporary file might lead to network timeouts.",
			"routing": {
				"send": {
					"property": "Synchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Media"
					]
				}
			}
		},
		{
			"displayName": "Transcode",
			"name": "Transcode",
			"type": "string",
			"default": "",
			"description": "If present, the DICOM files in the archive will be transcoded to the provided transfer syntax: https://book.orthanc-server.com/faq/transcoding.html",
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
						"Series"
					],
					"operation": [
						"POST Series Media"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Metadata"
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
						"Series"
					],
					"operation": [
						"GET Series Metadata"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Metadata"
					]
				}
			}
		},
		{
			"displayName": "DELETE /series/{id}/metadata/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"DELETE Series Metadata"
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
						"Series"
					],
					"operation": [
						"DELETE Series Metadata"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"DELETE Series Metadata"
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
						"Series"
					],
					"operation": [
						"DELETE Series Metadata"
					]
				}
			}
		},
		{
			"displayName": "PUT /series/{id}/metadata/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"PUT Series Metadata"
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
						"Series"
					],
					"operation": [
						"PUT Series Metadata"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"PUT Series Metadata"
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
						"Series"
					],
					"operation": [
						"PUT Series Metadata"
					]
				}
			}
		},
		{
			"displayName": "PUT /series/{id}/metadata/{name}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"PUT Series Metadata"
					]
				}
			}
		},
		{
			"displayName": "POST /series/{id}/modify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Modify"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Modify"
					]
				}
			}
		},
		{
			"displayName": "Asynchronous",
			"name": "Asynchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, run the job in asynchronous mode, which means that the REST API call will immediately return, reporting the identifier of a job. Prefer this flavor wherever possible.",
			"routing": {
				"send": {
					"property": "Asynchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Modify"
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
						"Series"
					],
					"operation": [
						"POST Series Modify"
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
						"Series"
					],
					"operation": [
						"POST Series Modify"
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
						"Series"
					],
					"operation": [
						"POST Series Modify"
					]
				}
			}
		},
		{
			"displayName": "Permissive",
			"name": "Permissive",
			"type": "boolean",
			"default": true,
			"description": "If `true`, ignore errors during the individual steps of the job.",
			"routing": {
				"send": {
					"property": "Permissive",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Modify"
					]
				}
			}
		},
		{
			"displayName": "Priority",
			"name": "Priority",
			"type": "number",
			"default": 0,
			"description": "In asynchronous mode, the priority of the job. The lower the value, the higher the priority.",
			"routing": {
				"send": {
					"property": "Priority",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Modify"
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
						"Series"
					],
					"operation": [
						"POST Series Modify"
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
						"Series"
					],
					"operation": [
						"POST Series Modify"
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
						"Series"
					],
					"operation": [
						"POST Series Modify"
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
						"Series"
					],
					"operation": [
						"POST Series Modify"
					]
				}
			}
		},
		{
			"displayName": "Synchronous",
			"name": "Synchronous",
			"type": "boolean",
			"default": true,
			"description": "If `true`, run the job in synchronous mode, which means that the HTTP answer will directly contain the result of the job. This is the default, easy behavior, but it is *not* desirable for long jobs, as it might lead to network timeouts.",
			"routing": {
				"send": {
					"property": "Synchronous",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Modify"
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
						"Series"
					],
					"operation": [
						"POST Series Modify"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/module",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Module"
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
						"Series"
					],
					"operation": [
						"GET Series Module"
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
						"Series"
					],
					"operation": [
						"GET Series Module"
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
						"Series"
					],
					"operation": [
						"GET Series Module"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Module"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/numpy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Numpy"
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
						"Series"
					],
					"operation": [
						"GET Series Numpy"
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
						"Series"
					],
					"operation": [
						"GET Series Numpy"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the DICOM resource of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Numpy"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/patient",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Patient"
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
						"Series"
					],
					"operation": [
						"GET Series Patient"
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
						"Series"
					],
					"operation": [
						"GET Series Patient"
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
						"Series"
					],
					"operation": [
						"GET Series Patient"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Patient"
					]
				}
			}
		},
		{
			"displayName": "POST /series/{id}/reconstruct",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Reconstruct"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"POST Series Reconstruct"
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
						"Series"
					],
					"operation": [
						"POST Series Reconstruct"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/shared-tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Shared Tags"
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
						"Series"
					],
					"operation": [
						"GET Series Shared Tags"
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
						"Series"
					],
					"operation": [
						"GET Series Shared Tags"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Shared Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/statistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Statistics"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Statistics"
					]
				}
			}
		},
		{
			"displayName": "GET /series/{id}/study",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Study"
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
						"Series"
					],
					"operation": [
						"GET Series Study"
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
						"Series"
					],
					"operation": [
						"GET Series Study"
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
						"Series"
					],
					"operation": [
						"GET Series Study"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the series of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Series"
					],
					"operation": [
						"GET Series Study"
					]
				}
			}
		},
];
