/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/dataSourcesMappers";
import * as Parameters from "../models/parameters";
import { SearchServiceClientContext } from "../searchServiceClientContext";

/** Class representing a DataSources. */
export class DataSources {
  private readonly client: SearchServiceClientContext;

  /**
   * Create a DataSources.
   * @param {SearchServiceClientContext} client Reference to the service client.
   */
  constructor(client: SearchServiceClientContext) {
    this.client = client;
  }

  /**
   * Creates a new datasource or updates a datasource if it already exists.
   * @param dataSourceName The name of the datasource to create or update.
   * @param dataSource The definition of the datasource to create or update.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSourcesCreateOrUpdateResponse>
   */
  createOrUpdate(dataSourceName: string, dataSource: Models.DataSource, options?: Models.DataSourcesCreateOrUpdateOptionalParams): Promise<Models.DataSourcesCreateOrUpdateResponse>;
  /**
   * @param dataSourceName The name of the datasource to create or update.
   * @param dataSource The definition of the datasource to create or update.
   * @param callback The callback
   */
  createOrUpdate(dataSourceName: string, dataSource: Models.DataSource, callback: coreHttp.ServiceCallback<Models.DataSource>): void;
  /**
   * @param dataSourceName The name of the datasource to create or update.
   * @param dataSource The definition of the datasource to create or update.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(dataSourceName: string, dataSource: Models.DataSource, options: Models.DataSourcesCreateOrUpdateOptionalParams, callback: coreHttp.ServiceCallback<Models.DataSource>): void;
  createOrUpdate(dataSourceName: string, dataSource: Models.DataSource, options?: Models.DataSourcesCreateOrUpdateOptionalParams | coreHttp.ServiceCallback<Models.DataSource>, callback?: coreHttp.ServiceCallback<Models.DataSource>): Promise<Models.DataSourcesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        dataSourceName,
        dataSource,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.DataSourcesCreateOrUpdateResponse>;
  }

  /**
   * Deletes a datasource.
   * @param dataSourceName The name of the datasource to delete.
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  deleteMethod(dataSourceName: string, options?: Models.DataSourcesDeleteMethodOptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param dataSourceName The name of the datasource to delete.
   * @param callback The callback
   */
  deleteMethod(dataSourceName: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param dataSourceName The name of the datasource to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(dataSourceName: string, options: Models.DataSourcesDeleteMethodOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(dataSourceName: string, options?: Models.DataSourcesDeleteMethodOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        dataSourceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieves a datasource definition.
   * @param dataSourceName The name of the datasource to retrieve.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSourcesGetResponse>
   */
  get(dataSourceName: string, options?: coreHttp.RequestOptionsBase): Promise<Models.DataSourcesGetResponse>;
  /**
   * @param dataSourceName The name of the datasource to retrieve.
   * @param callback The callback
   */
  get(dataSourceName: string, callback: coreHttp.ServiceCallback<Models.DataSource>): void;
  /**
   * @param dataSourceName The name of the datasource to retrieve.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(dataSourceName: string, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.DataSource>): void;
  get(dataSourceName: string, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.DataSource>, callback?: coreHttp.ServiceCallback<Models.DataSource>): Promise<Models.DataSourcesGetResponse> {
    return this.client.sendOperationRequest(
      {
        dataSourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DataSourcesGetResponse>;
  }

  /**
   * Lists all datasources available for a search service.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSourcesListResponse>
   */
  list(options?: Models.DataSourcesListOptionalParams): Promise<Models.DataSourcesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: coreHttp.ServiceCallback<Models.ListDataSourcesResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.DataSourcesListOptionalParams, callback: coreHttp.ServiceCallback<Models.ListDataSourcesResult>): void;
  list(options?: Models.DataSourcesListOptionalParams | coreHttp.ServiceCallback<Models.ListDataSourcesResult>, callback?: coreHttp.ServiceCallback<Models.ListDataSourcesResult>): Promise<Models.DataSourcesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DataSourcesListResponse>;
  }

  /**
   * Creates a new datasource.
   * @param dataSource The definition of the datasource to create.
   * @param [options] The optional parameters
   * @returns Promise<Models.DataSourcesCreateResponse>
   */
  create(dataSource: Models.DataSource, options?: coreHttp.RequestOptionsBase): Promise<Models.DataSourcesCreateResponse>;
  /**
   * @param dataSource The definition of the datasource to create.
   * @param callback The callback
   */
  create(dataSource: Models.DataSource, callback: coreHttp.ServiceCallback<Models.DataSource>): void;
  /**
   * @param dataSource The definition of the datasource to create.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(dataSource: Models.DataSource, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.DataSource>): void;
  create(dataSource: Models.DataSource, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.DataSource>, callback?: coreHttp.ServiceCallback<Models.DataSource>): Promise<Models.DataSourcesCreateResponse> {
    return this.client.sendOperationRequest(
      {
        dataSource,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.DataSourcesCreateResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "datasources('{dataSourceName}')",
  urlParameters: [
    Parameters.endpoint,
    Parameters.dataSourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.prefer,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  requestBody: {
    parameterPath: "dataSource",
    mapper: {
      ...Mappers.DataSource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DataSource
    },
    201: {
      bodyMapper: Mappers.DataSource
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  serializer
};

const deleteMethodOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "datasources('{dataSourceName}')",
  urlParameters: [
    Parameters.endpoint,
    Parameters.dataSourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  serializer
};

const getOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "datasources('{dataSourceName}')",
  urlParameters: [
    Parameters.endpoint,
    Parameters.dataSourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DataSource
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  serializer
};

const listOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "datasources",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.select,
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListDataSourcesResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  serializer
};

const createOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "datasources",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  requestBody: {
    parameterPath: "dataSource",
    mapper: {
      ...Mappers.DataSource,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.DataSource
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  serializer
};
