# @n8n-dev/n8n-nodes-orthanc-server

![orthanc-server Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-orthanc-server.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-orthanc-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing orthanc-server API integrations by hand.**

Every time you connect n8n to orthanc-server, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to orthanc-server took 5 minutes, not half a day?**

This node gives you **10+ resources** out of the box: **Tracking Changes**, **Instances**, **Other**, **Jobs**, **Networking**, and 5 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-orthanc-server
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-orthanc-server`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **orthanc-server API** → paste your API key
3. Drag the **orthanc-server** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Tracking Changes</b> (4 operations)</summary>

- Delete Clear changes
- Get List changes
- Delete Clear exports
- Get List exports

</details>

<details>
<summary><b>Instances</b> (52 operations)</summary>

- Get List the available instances
- Post Upload DICOM instances
- Delete some instance
- Post Anonymize instance
- Get List attachments
- Delete attachment
- Put Set attachment
- Post Compress attachment
- Get attachment no decompression
- Get MD5 of attachment on disk
- Get size of attachment on disk
- Get attachment
- Get info about the attachment
- Get Is attachment compressed
- Get MD5 of attachment
- Get size of attachment
- Post Uncompress attachment
- Post Verify attachment
- Get raw tag
- Post Write DICOM onto filesystem
- Get Download DICOM
- Get List available frames
- Get Decode a frame int16
- Get Decode a frame uint16
- Get Decode a frame uint8
- Get Decode frame for Matlab
- Get Decode frame for numpy
- Get Decode a frame preview
- Get Access raw frame
- Get Access raw frame compressed
- Get Render a frame
- Get DICOM meta header
- Get Decode an image int16
- Get Decode an image uint16
- Get Decode an image uint8
- Get Decode frame for Matlab
- Get List metadata
- Delete metadata
- Put Set metadata
- Post Modify instance
- Get instance module
- Get Decode instance for numpy
- Get parent patient
- Get embedded PDF
- Get Decode an image preview
- Post Reconstruct tags optionally files of instance
- Get Render an image
- Get parent series
- Get human readable tags
- Get instance statistics
- Get parent study
- Get DICOM tags

</details>

<details>
<summary><b>Other</b> (6 operations)</summary>

- Get List operations on attachments
- Get List operations
- Get List operations on attachments
- Get List operations on attachments
- Get List operations on attachments
- Get List operations

</details>

<details>
<summary><b>Jobs</b> (5 operations)</summary>

- Get List jobs
- Post Cancel job
- Post Pause job
- Post Resubmit job
- Post Resume job

</details>

<details>
<summary><b>Networking</b> (32 operations)</summary>

- Get List DICOM modalities
- Delete DICOM modality
- Put Update DICOM modality
- Get modality configuration
- Post Trigger C ECHO SCU
- Post C FIND SCU for worklist
- Post Trigger C MOVE SCU
- Post Trigger C FIND SCU
- Post Trigger storage commitment request
- Post Trigger C STORE SCU
- Post Straight C STORE SCU
- Get List Orthanc peers
- Delete Orthanc peer
- Put Update Orthanc peer
- Get peer configuration
- Post Send to Orthanc peer
- Post Straight store to peer
- Get peer system information
- Get List query retrieve operations
- Delete a query
- Get List answers to a query
- Get one answer
- Post Query the child instances of an answer
- Post Query the child series of an answer
- Post Query the child studies of an answer
- Post Retrieve one answer
- Get level of original query
- Get modality of original query
- Get original query arguments
- Post Retrieve all answers
- Get storage commitment report
- Post Remove after storage commitment

</details>

<details>
<summary><b>Patients</b> (35 operations)</summary>

- Get List the available patients
- Delete some patient
- Post Anonymize patient
- Get Create ZIP archive
- Post Create ZIP archive
- Get List attachments
- Delete attachment
- Put Set attachment
- Post Compress attachment
- Get attachment no decompression
- Get MD5 of attachment on disk
- Get size of attachment on disk
- Get attachment
- Get info about the attachment
- Get Is attachment compressed
- Get MD5 of attachment
- Get size of attachment
- Post Uncompress attachment
- Post Verify attachment
- Get child instances
- Get tags of instances
- Get Create DICOMDIR media
- Post Create DICOMDIR media
- Get List metadata
- Delete metadata
- Put Set metadata
- Post Modify patient
- Get patient module
- Get Is the patient protected against recycling
- Put Protect one patient against recycling
- Post Reconstruct tags optionally files of patient
- Get child series
- Get shared tags
- Get patient statistics
- Get child studies

</details>

<details>
<summary><b>System</b> (33 operations)</summary>

- Get List plugins
- Get JavaScript extensions to Orthanc Explorer
- Get database statistics
- Get system information
- Get accepted transfer syntaxes
- Put Set accepted transfer syntaxes
- Post Anonymize a set of resources
- Post Describe a set of resources
- Post Delete a set of resources
- Post Modify a set of resources
- Post Create ZIP archive
- Post Create one DICOM instance
- Post Create DICOMDIR media
- Post Create DICOMDIR media
- Get default encoding
- Put Set default encoding
- Get DICOM conformance
- Post Trigger C ECHO SCU
- Post Execute Lua script
- Post Look for local resources
- Get Generate an identifier
- Post Invalidate DICOM as JSON summaries
- Post Look for DICOM identifiers
- Get Are metrics collected
- Put Enable collection of metrics
- Get usage metrics
- Get UTC time
- Get local time
- Post Reconstruct all the index
- Post Restart Orthanc
- Post Shutdown Orthanc
- Get Is unknown SOP class accepted
- Put Set unknown SOP class accepted

</details>

<details>
<summary><b>Series</b> (34 operations)</summary>

- Get List the available series
- Delete some series
- Post Anonymize series
- Get Create ZIP archive
- Post Create ZIP archive
- Get List attachments
- Delete attachment
- Put Set attachment
- Post Compress attachment
- Get attachment no decompression
- Get MD5 of attachment on disk
- Get size of attachment on disk
- Get attachment
- Get info about the attachment
- Get Is attachment compressed
- Get MD5 of attachment
- Get size of attachment
- Post Uncompress attachment
- Post Verify attachment
- Get child instances
- Get tags of instances
- Get Create DICOMDIR media
- Post Create DICOMDIR media
- Get List metadata
- Delete metadata
- Put Set metadata
- Post Modify series
- Get series module
- Get Decode series for numpy
- Get parent patient
- Post Reconstruct tags optionally files of series
- Get shared tags
- Get series statistics
- Get parent study

</details>

<details>
<summary><b>Studies</b> (36 operations)</summary>

- Get List the available studies
- Delete some study
- Post Anonymize study
- Get Create ZIP archive
- Post Create ZIP archive
- Get List attachments
- Delete attachment
- Put Set attachment
- Post Compress attachment
- Get attachment no decompression
- Get MD5 of attachment on disk
- Get size of attachment on disk
- Get attachment
- Get info about the attachment
- Get Is attachment compressed
- Get MD5 of attachment
- Get size of attachment
- Post Uncompress attachment
- Post Verify attachment
- Get child instances
- Get tags of instances
- Get Create DICOMDIR media
- Post Create DICOMDIR media
- Post Merge study
- Get List metadata
- Delete metadata
- Put Set metadata
- Post Modify study
- Get study module
- Get patient module of study
- Get parent patient
- Post Reconstruct tags optionally files of study
- Get child series
- Get shared tags
- Post Split study
- Get study statistics

</details>

<details>
<summary><b>Logs</b> (16 operations)</summary>

- Get main log level
- Put Set main log level
- Get log level for dicom
- Put Set log level for dicom
- Get log level for generic
- Put Set log level for generic
- Get log level for HTTP
- Put Set log level for HTTP
- Get log level for jobs
- Put Set log level for jobs
- Get log level for lua
- Put Set log level for lua
- Get log level for plugins
- Put Set log level for plugins
- Get log level for sqlite
- Put Set log level for sqlite

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from orthanc-server docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official orthanc-server OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **orthanc-server** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the orthanc-server API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
