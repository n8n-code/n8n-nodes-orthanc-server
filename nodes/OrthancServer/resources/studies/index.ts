import type { INodeProperties } from 'n8n-workflow';

export const studiesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					]
				}
			},
			"options": [
				{
					"name": "GET Studies",
					"value": "GET Studies",
					"action": "List the available studies",
					"description": "List the Orthanc identifiers of all the available DICOM studies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies"
						}
					}
				},
				{
					"name": "DELETE Studies",
					"value": "DELETE Studies",
					"action": "Delete some study",
					"description": "Delete the DICOM study whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/studies/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "POST Studies Anonymize",
					"value": "POST Studies Anonymize",
					"action": "Anonymize study",
					"description": "Start a job that will anonymize all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#anonymization-of-patients-studies-or-series",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/studies/{{$parameter[\"id\"]}}/anonymize"
						}
					}
				},
				{
					"name": "GET Studies Archive",
					"value": "GET Studies Archive",
					"action": "Create ZIP archive",
					"description": "Synchronously create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/archive"
						}
					}
				},
				{
					"name": "POST Studies Archive",
					"value": "POST Studies Archive",
					"action": "Create ZIP archive",
					"description": "Create a ZIP archive containing the DICOM study whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/studies/{{$parameter[\"id\"]}}/archive"
						}
					}
				},
				{
					"name": "GET Studies Attachments",
					"value": "GET Studies Attachments",
					"action": "List attachments",
					"description": "Get the list of attachments that are associated with the given study",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments"
						}
					}
				},
				{
					"name": "DELETE Studies Attachments",
					"value": "DELETE Studies Attachments",
					"action": "Delete attachment",
					"description": "Delete an attachment associated with the given DICOM study. This call will fail if trying to delete a system attachment (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "PUT Studies Attachments",
					"value": "PUT Studies Attachments",
					"action": "Set attachment",
					"description": "Attach a file to the given DICOM study. This call will fail if trying to modify a system attachment (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "POST Studies Attachments Compress",
					"value": "POST Studies Attachments Compress",
					"action": "Compress attachment",
					"description": "Change the compression scheme that is used to store an attachment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compress"
						}
					}
				},
				{
					"name": "GET Studies Attachments Compressed Data",
					"value": "GET Studies Attachments Compressed Data",
					"action": "Get attachment (no decompression)",
					"description": "Get the (binary) content of one attachment associated with the given study. The attachment will not be decompressed if `StorageCompression` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compressed-data"
						}
					}
				},
				{
					"name": "GET Studies Attachments Compressed Md 5",
					"value": "GET Studies Attachments Compressed Md 5",
					"action": "Get MD5 of attachment on disk",
					"description": "Get the MD5 hash of one attachment associated with the given study, as stored on the disk. This is different from `.../md5` iff `EnableStorage` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compressed-md5"
						}
					}
				},
				{
					"name": "GET Studies Attachments Compressed Size",
					"value": "GET Studies Attachments Compressed Size",
					"action": "Get size of attachment on disk",
					"description": "Get the size of one attachment associated with the given study, as stored on the disk. This is different from `.../size` iff `EnableStorage` is `true`.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/compressed-size"
						}
					}
				},
				{
					"name": "GET Studies Attachments Data",
					"value": "GET Studies Attachments Data",
					"action": "Get attachment",
					"description": "Get the (binary) content of one attachment associated with the given study",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/data"
						}
					}
				},
				{
					"name": "GET Studies Attachments Info",
					"value": "GET Studies Attachments Info",
					"action": "Get info about the attachment",
					"description": "Get all the information about the attachment associated with the given study",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/info"
						}
					}
				},
				{
					"name": "GET Studies Attachments Is Compressed",
					"value": "GET Studies Attachments Is Compressed",
					"action": "Is attachment compressed?",
					"description": "Test whether the attachment has been stored as a compressed file on the disk.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/is-compressed"
						}
					}
				},
				{
					"name": "GET Studies Attachments Md 5",
					"value": "GET Studies Attachments Md 5",
					"action": "Get MD5 of attachment",
					"description": "Get the MD5 hash of one attachment associated with the given study",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/md5"
						}
					}
				},
				{
					"name": "GET Studies Attachments Size",
					"value": "GET Studies Attachments Size",
					"action": "Get size of attachment",
					"description": "Get the size of one attachment associated with the given study",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/size"
						}
					}
				},
				{
					"name": "POST Studies Attachments Uncompress",
					"value": "POST Studies Attachments Uncompress",
					"action": "Uncompress attachment",
					"description": "Change the compression scheme that is used to store an attachment.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/uncompress"
						}
					}
				},
				{
					"name": "POST Studies Attachments Verify Md 5",
					"value": "POST Studies Attachments Verify Md 5",
					"action": "Verify attachment",
					"description": "Verify that the attachment is not corrupted, by validating its MD5 hash",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/studies/{{$parameter[\"id\"]}}/attachments/{{$parameter[\"name\"]}}/verify-md5"
						}
					}
				},
				{
					"name": "GET Studies Instances",
					"value": "GET Studies Instances",
					"action": "Get child instances",
					"description": "Get detailed information about the child instances of the DICOM study whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/instances"
						}
					}
				},
				{
					"name": "GET Studies Instances Tags",
					"value": "GET Studies Instances Tags",
					"action": "Get tags of instances",
					"description": "Get the tags of all the child instances of the DICOM study whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/instances-tags"
						}
					}
				},
				{
					"name": "GET Studies Media",
					"value": "GET Studies Media",
					"action": "Create DICOMDIR media",
					"description": "Synchronously create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL. This flavor is synchronous, which might *not* be desirable to archive large amount of data, as it might lead to network timeouts. Prefer the asynchronous version using `POST` method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/media"
						}
					}
				},
				{
					"name": "POST Studies Media",
					"value": "POST Studies Media",
					"action": "Create DICOMDIR media",
					"description": "Create a DICOMDIR media containing the DICOM study whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/studies/{{$parameter[\"id\"]}}/media"
						}
					}
				},
				{
					"name": "POST Studies Merge",
					"value": "POST Studies Merge",
					"action": "Merge study",
					"description": "Start a new job so as to move some DICOM resources into the DICOM study whose Orthanc identifier is provided in the URL: https://book.orthanc-server.com/users/anonymization.html#merging",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/studies/{{$parameter[\"id\"]}}/merge"
						}
					}
				},
				{
					"name": "GET Studies Metadata",
					"value": "GET Studies Metadata",
					"action": "List metadata",
					"description": "Get the list of metadata that are associated with the given study",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/metadata"
						}
					}
				},
				{
					"name": "DELETE Studies Metadata",
					"value": "DELETE Studies Metadata",
					"action": "Delete metadata",
					"description": "Delete some metadata associated with the given DICOM study. This call will fail if trying to delete a system metadata (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/studies/{{$parameter[\"id\"]}}/metadata/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "PUT Studies Metadata",
					"value": "PUT Studies Metadata",
					"action": "Set metadata",
					"description": "Set the value of some metadata in the given DICOM study. This call will fail if trying to modify a system metadata (i.e. whose index is < 1024).",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/studies/{{$parameter[\"id\"]}}/metadata/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "POST Studies Modify",
					"value": "POST Studies Modify",
					"action": "Modify study",
					"description": "Start a job that will modify all the DICOM instances within the study whose identifier is provided in the URL. The modified DICOM instances will be stored into a brand new study, whose Orthanc identifiers will be returned by the job. https://book.orthanc-server.com/users/anonymization.html#modification-of-studies-or-series",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/studies/{{$parameter[\"id\"]}}/modify"
						}
					}
				},
				{
					"name": "GET Studies Module",
					"value": "GET Studies Module",
					"action": "Get study module",
					"description": "Get the study module of the DICOM study whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/module"
						}
					}
				},
				{
					"name": "GET Studies Module Patient",
					"value": "GET Studies Module Patient",
					"action": "Get patient module of study",
					"description": "Get the patient module of the DICOM study whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/module-patient"
						}
					}
				},
				{
					"name": "GET Studies Patient",
					"value": "GET Studies Patient",
					"action": "Get parent patient",
					"description": "Get detailed information about the parent patient of the DICOM study whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/patient"
						}
					}
				},
				{
					"name": "POST Studies Reconstruct",
					"value": "POST Studies Reconstruct",
					"action": "Reconstruct tags & optionally files of study",
					"description": "Reconstruct the main DICOM tags in DB of the study whose Orthanc identifier is provided in the URL. This is useful if child studies/series/instances have inconsistent values for higher-level tags, in order to force Orthanc to use the value from the resource of interest. Beware that this is a time-consuming operation, as all the children DICOM instances will be parsed again, and the Orthanc index will be updated accordingly.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/studies/{{$parameter[\"id\"]}}/reconstruct"
						}
					}
				},
				{
					"name": "GET Studies Series",
					"value": "GET Studies Series",
					"action": "Get child series",
					"description": "Get detailed information about the child series of the DICOM study whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/series"
						}
					}
				},
				{
					"name": "GET Studies Shared Tags",
					"value": "GET Studies Shared Tags",
					"action": "Get shared tags",
					"description": "Extract the DICOM tags whose value is constant across all the child instances of the DICOM study whose Orthanc identifier is provided in the URL",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/shared-tags"
						}
					}
				},
				{
					"name": "POST Studies Split",
					"value": "POST Studies Split",
					"action": "Split study",
					"description": "Start a new job so as to split the DICOM study whose Orthanc identifier is provided in the URL, by taking some of its children series or instances out of it and putting them into a brand new study (this new study is created by setting the `StudyInstanceUID` tag to a random identifier): https://book.orthanc-server.com/users/anonymization.html#splitting",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/studies/{{$parameter[\"id\"]}}/split"
						}
					}
				},
				{
					"name": "GET Studies Statistics",
					"value": "GET Studies Statistics",
					"action": "Get study statistics",
					"description": "Get statistics about the given study",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/studies/{{$parameter[\"id\"]}}/statistics"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /studies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "expand",
			"description": "If present, retrieve detailed information about the individual studies",
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
						"Studies"
					],
					"operation": [
						"GET Studies"
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
						"Studies"
					],
					"operation": [
						"GET Studies"
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
						"Studies"
					],
					"operation": [
						"GET Studies"
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
						"Studies"
					],
					"operation": [
						"GET Studies"
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
						"Studies"
					],
					"operation": [
						"GET Studies"
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
						"Studies"
					],
					"operation": [
						"GET Studies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /studies/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"DELETE Studies"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"DELETE Studies"
					]
				}
			}
		},
		{
			"displayName": "POST /studies/{id}/anonymize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
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
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
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
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
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
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
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
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
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
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
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
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
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
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
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
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
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
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
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
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
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
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
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
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
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
						"Studies"
					],
					"operation": [
						"POST Studies Anonymize"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Archive"
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
						"Studies"
					],
					"operation": [
						"GET Studies Archive"
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
						"Studies"
					],
					"operation": [
						"GET Studies Archive"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Archive"
					]
				}
			}
		},
		{
			"displayName": "POST /studies/{id}/archive",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Archive"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Archive"
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
						"Studies"
					],
					"operation": [
						"POST Studies Archive"
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
						"Studies"
					],
					"operation": [
						"POST Studies Archive"
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
						"Studies"
					],
					"operation": [
						"POST Studies Archive"
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
						"Studies"
					],
					"operation": [
						"POST Studies Archive"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/attachments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /studies/{id}/attachments/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"DELETE Studies Attachments"
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
						"Studies"
					],
					"operation": [
						"DELETE Studies Attachments"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"DELETE Studies Attachments"
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
						"Studies"
					],
					"operation": [
						"DELETE Studies Attachments"
					]
				}
			}
		},
		{
			"displayName": "PUT /studies/{id}/attachments/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"PUT Studies Attachments"
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
						"Studies"
					],
					"operation": [
						"PUT Studies Attachments"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"PUT Studies Attachments"
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
						"Studies"
					],
					"operation": [
						"PUT Studies Attachments"
					]
				}
			}
		},
		{
			"displayName": "PUT /studies/{id}/attachments/{name}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"PUT Studies Attachments"
					]
				}
			}
		},
		{
			"displayName": "POST /studies/{id}/attachments/{name}/compress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Attachments Compress"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Attachments Compress"
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
						"Studies"
					],
					"operation": [
						"POST Studies Attachments Compress"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/attachments/{name}/compressed-data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Compressed Data"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Compressed Data"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Compressed Data"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Compressed Data"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/attachments/{name}/compressed-md5",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Compressed Md 5"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Compressed Md 5"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Compressed Md 5"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Compressed Md 5"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/attachments/{name}/compressed-size",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Compressed Size"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Compressed Size"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Compressed Size"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Compressed Size"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/attachments/{name}/data",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Data"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Data"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Data"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Data"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/attachments/{name}/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Info"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Info"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Info"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Info"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/attachments/{name}/is-compressed",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Is Compressed"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Is Compressed"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Is Compressed"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Is Compressed"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/attachments/{name}/md5",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Md 5"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Md 5"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Md 5"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Md 5"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/attachments/{name}/size",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Size"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Size"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Size"
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
						"Studies"
					],
					"operation": [
						"GET Studies Attachments Size"
					]
				}
			}
		},
		{
			"displayName": "POST /studies/{id}/attachments/{name}/uncompress",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Attachments Uncompress"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Attachments Uncompress"
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
						"Studies"
					],
					"operation": [
						"POST Studies Attachments Uncompress"
					]
				}
			}
		},
		{
			"displayName": "POST /studies/{id}/attachments/{name}/verify-md5",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Attachments Verify Md 5"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Attachments Verify Md 5"
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
						"Studies"
					],
					"operation": [
						"POST Studies Attachments Verify Md 5"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/instances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Instances"
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
						"Studies"
					],
					"operation": [
						"GET Studies Instances"
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
						"Studies"
					],
					"operation": [
						"GET Studies Instances"
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
						"Studies"
					],
					"operation": [
						"GET Studies Instances"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/instances-tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Instances Tags"
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
						"Studies"
					],
					"operation": [
						"GET Studies Instances Tags"
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
						"Studies"
					],
					"operation": [
						"GET Studies Instances Tags"
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
						"Studies"
					],
					"operation": [
						"GET Studies Instances Tags"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Instances Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/media",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Media"
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
						"Studies"
					],
					"operation": [
						"GET Studies Media"
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
						"Studies"
					],
					"operation": [
						"GET Studies Media"
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
						"Studies"
					],
					"operation": [
						"GET Studies Media"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Media"
					]
				}
			}
		},
		{
			"displayName": "POST /studies/{id}/media",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Media"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Media"
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
						"Studies"
					],
					"operation": [
						"POST Studies Media"
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
						"Studies"
					],
					"operation": [
						"POST Studies Media"
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
						"Studies"
					],
					"operation": [
						"POST Studies Media"
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
						"Studies"
					],
					"operation": [
						"POST Studies Media"
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
						"Studies"
					],
					"operation": [
						"POST Studies Media"
					]
				}
			}
		},
		{
			"displayName": "POST /studies/{id}/merge",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Merge"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Merge"
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
						"Studies"
					],
					"operation": [
						"POST Studies Merge"
					]
				}
			}
		},
		{
			"displayName": "Keep Source",
			"name": "KeepSource",
			"type": "boolean",
			"default": true,
			"description": "If set to `true`, instructs Orthanc to keep a copy of the original resources in their source study. By default, the original resources are deleted from Orthanc.",
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
						"Studies"
					],
					"operation": [
						"POST Studies Merge"
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
						"Studies"
					],
					"operation": [
						"POST Studies Merge"
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
						"Studies"
					],
					"operation": [
						"POST Studies Merge"
					]
				}
			}
		},
		{
			"displayName": "Resources",
			"name": "Resources",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of DICOM resources (studies, series, and/or instances) to be merged into the study of interest (mandatory option)",
			"routing": {
				"send": {
					"property": "Resources",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Merge"
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
						"Studies"
					],
					"operation": [
						"POST Studies Merge"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Metadata"
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
						"Studies"
					],
					"operation": [
						"GET Studies Metadata"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Metadata"
					]
				}
			}
		},
		{
			"displayName": "DELETE /studies/{id}/metadata/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"DELETE Studies Metadata"
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
						"Studies"
					],
					"operation": [
						"DELETE Studies Metadata"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"DELETE Studies Metadata"
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
						"Studies"
					],
					"operation": [
						"DELETE Studies Metadata"
					]
				}
			}
		},
		{
			"displayName": "PUT /studies/{id}/metadata/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"PUT Studies Metadata"
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
						"Studies"
					],
					"operation": [
						"PUT Studies Metadata"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"PUT Studies Metadata"
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
						"Studies"
					],
					"operation": [
						"PUT Studies Metadata"
					]
				}
			}
		},
		{
			"displayName": "PUT /studies/{id}/metadata/{name}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"PUT Studies Metadata"
					]
				}
			}
		},
		{
			"displayName": "POST /studies/{id}/modify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
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
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
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
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
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
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
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
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
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
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
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
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
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
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
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
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
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
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
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
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
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
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
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
						"Studies"
					],
					"operation": [
						"POST Studies Modify"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/module",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Module"
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
						"Studies"
					],
					"operation": [
						"GET Studies Module"
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
						"Studies"
					],
					"operation": [
						"GET Studies Module"
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
						"Studies"
					],
					"operation": [
						"GET Studies Module"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Module"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/module-patient",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Module Patient"
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
						"Studies"
					],
					"operation": [
						"GET Studies Module Patient"
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
						"Studies"
					],
					"operation": [
						"GET Studies Module Patient"
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
						"Studies"
					],
					"operation": [
						"GET Studies Module Patient"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Module Patient"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/patient",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Patient"
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
						"Studies"
					],
					"operation": [
						"GET Studies Patient"
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
						"Studies"
					],
					"operation": [
						"GET Studies Patient"
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
						"Studies"
					],
					"operation": [
						"GET Studies Patient"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Patient"
					]
				}
			}
		},
		{
			"displayName": "POST /studies/{id}/reconstruct",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Reconstruct"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Reconstruct"
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
						"Studies"
					],
					"operation": [
						"POST Studies Reconstruct"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/series",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Series"
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
						"Studies"
					],
					"operation": [
						"GET Studies Series"
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
						"Studies"
					],
					"operation": [
						"GET Studies Series"
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
						"Studies"
					],
					"operation": [
						"GET Studies Series"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Series"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/shared-tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Shared Tags"
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
						"Studies"
					],
					"operation": [
						"GET Studies Shared Tags"
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
						"Studies"
					],
					"operation": [
						"GET Studies Shared Tags"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Shared Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /studies/{id}/split",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Split"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Split"
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
						"Studies"
					],
					"operation": [
						"POST Studies Split"
					]
				}
			}
		},
		{
			"displayName": "Instances",
			"name": "Instances",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of instances to be separated from the parent study. These instances must all be children of the same source study, that is specified in the URI.",
			"routing": {
				"send": {
					"property": "Instances",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Split"
					]
				}
			}
		},
		{
			"displayName": "Keep Source",
			"name": "KeepSource",
			"type": "boolean",
			"default": true,
			"description": "If set to `true`, instructs Orthanc to keep a copy of the original series/instances in the source study. By default, the original series/instances are deleted from Orthanc.",
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
						"Studies"
					],
					"operation": [
						"POST Studies Split"
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
						"Studies"
					],
					"operation": [
						"POST Studies Split"
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
						"Studies"
					],
					"operation": [
						"POST Studies Split"
					]
				}
			}
		},
		{
			"displayName": "Remove",
			"name": "Remove",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "List of tags that must be removed in the new study (from the same modules as in the `Replace` option)",
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
						"Studies"
					],
					"operation": [
						"POST Studies Split"
					]
				}
			}
		},
		{
			"displayName": "Replace",
			"name": "Replace",
			"type": "json",
			"default": "{}",
			"description": "Associative array to change the value of some DICOM tags in the new study. These tags must be part of the \"Patient Module Attributes\" or the \"General Study Module Attributes\", as specified by the DICOM 2011 standard in Tables C.7-1 and C.7-3.",
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
						"Studies"
					],
					"operation": [
						"POST Studies Split"
					]
				}
			}
		},
		{
			"displayName": "Series",
			"name": "Series",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of series to be separated from the parent study. These series must all be children of the same source study, that is specified in the URI.",
			"routing": {
				"send": {
					"property": "Series",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"POST Studies Split"
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
						"Studies"
					],
					"operation": [
						"POST Studies Split"
					]
				}
			}
		},
		{
			"displayName": "GET /studies/{id}/statistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Statistics"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Orthanc identifier of the study of interest",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Studies"
					],
					"operation": [
						"GET Studies Statistics"
					]
				}
			}
		},
];
