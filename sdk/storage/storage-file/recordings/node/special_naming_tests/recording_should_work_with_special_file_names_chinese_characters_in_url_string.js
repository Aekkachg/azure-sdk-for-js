let nock = require('nock');

module.exports.testInfo = {"Upper file empty another 汉字":"Upper file empty another 汉字156767547311902801"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/1share-with-dash156767546706905738/dir156767546706908324/Upper%20file%20empty%20another%20%E6%B1%89%E5%AD%97156767547311902801')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:24:33 GMT',
  'ETag',
  '"0x8D731E2DCD93DA7"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'fdd39e6e-301a-00a7-42cb-631f41000000',
  'x-ms-client-request-id',
  '151caf83-8e1f-42bf-ad04-c8209d01b5d2',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-05T09:24:33.3809063Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:24:33.3809063Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:24:33.3809063Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835181200584474624',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 05 Sep 2019 09:24:32 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/1share-with-dash156767546706905738/dir156767546706908324/Upper%20file%20empty%20another%20%E6%B1%89%E5%AD%97156767547311902801')
  .reply(200, "", [ 'Content-Length',
  '10',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:24:33 GMT',
  'ETag',
  '"0x8D731E2DCD93DA7"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'a711ebb7-f01a-0153-04cb-632aba000000',
  'x-ms-client-request-id',
  '7e329258-c859-4c39-860c-e52e7bed39fd',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-05T09:24:33.3809063Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:24:33.3809063Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:24:33.3809063Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835181200584474624',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 05 Sep 2019 09:24:33 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/1share-with-dash156767546706905738/dir156767546706908324')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"1share-with-dash156767546706905738\" DirectoryPath=\"dir156767546706908324\"><Prefix>Upper file empty another 汉字156767547311902801</Prefix><Entries><File><Name>Upper file empty another 汉字156767547311902801</Name><Properties><Content-Length>10</Content-Length></Properties></File></Entries><NextMarker /></EnumerationResults>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '0f3e8802-401a-0049-59cb-63b568000000',
  'x-ms-client-request-id',
  '56cd7620-8b9d-4069-bc4e-6c20e789c6bd',
  'x-ms-version',
  '2019-02-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 05 Sep 2019 09:24:33 GMT',
  'Connection',
  'close' ]);

