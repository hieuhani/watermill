// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var product_v1_product_service_pb = require('../../product/v1/product_service_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var envoyproxy_validate_validate_pb = require('../../envoyproxy/validate/validate_pb.js');

function serialize_product_v1_GetCategoriesRequest(arg) {
  if (!(arg instanceof product_v1_product_service_pb.GetCategoriesRequest)) {
    throw new Error('Expected argument of type product.v1.GetCategoriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_v1_GetCategoriesRequest(buffer_arg) {
  return product_v1_product_service_pb.GetCategoriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_v1_GetCategoriesResponse(arg) {
  if (!(arg instanceof product_v1_product_service_pb.GetCategoriesResponse)) {
    throw new Error('Expected argument of type product.v1.GetCategoriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_v1_GetCategoriesResponse(buffer_arg) {
  return product_v1_product_service_pb.GetCategoriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_v1_SearchProductsRequest(arg) {
  if (!(arg instanceof product_v1_product_service_pb.SearchProductsRequest)) {
    throw new Error('Expected argument of type product.v1.SearchProductsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_v1_SearchProductsRequest(buffer_arg) {
  return product_v1_product_service_pb.SearchProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_v1_SearchProductsResponse(arg) {
  if (!(arg instanceof product_v1_product_service_pb.SearchProductsResponse)) {
    throw new Error('Expected argument of type product.v1.SearchProductsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_v1_SearchProductsResponse(buffer_arg) {
  return product_v1_product_service_pb.SearchProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ProductService to search and filter products
var ProductServiceService = exports.ProductServiceService = {
  getCategories: {
    path: '/product.v1.ProductService/GetCategories',
    requestStream: false,
    responseStream: false,
    requestType: product_v1_product_service_pb.GetCategoriesRequest,
    responseType: product_v1_product_service_pb.GetCategoriesResponse,
    requestSerialize: serialize_product_v1_GetCategoriesRequest,
    requestDeserialize: deserialize_product_v1_GetCategoriesRequest,
    responseSerialize: serialize_product_v1_GetCategoriesResponse,
    responseDeserialize: deserialize_product_v1_GetCategoriesResponse,
  },
  searchProducts: {
    path: '/product.v1.ProductService/SearchProducts',
    requestStream: false,
    responseStream: false,
    requestType: product_v1_product_service_pb.SearchProductsRequest,
    responseType: product_v1_product_service_pb.SearchProductsResponse,
    requestSerialize: serialize_product_v1_SearchProductsRequest,
    requestDeserialize: deserialize_product_v1_SearchProductsRequest,
    responseSerialize: serialize_product_v1_SearchProductsResponse,
    responseDeserialize: deserialize_product_v1_SearchProductsResponse,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService);
