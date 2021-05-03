PROTOC_LINUX_VERSION = 3.15.8
PROTOC_LINUX_ZIP = protoc-$(PROTOC_LINUX_VERSION)-linux-x86_64.zip


install-linux:
	apt-get install autoconf automake libtool curl make g++ unzip
	curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v$(PROTOC_LINUX_VERSION)/$(PROTOC_LINUX_ZIP)
	unzip -o $(PROTOC_LINUX_ZIP) -d /usr/local bin/protoc
	unzip -o $(PROTOC_LINUX_ZIP) -d /usr/local 'include/*'
	rm -f $(PROTOC_LINUX_ZIP)

prepare:
	mkdir -p generated/go

generate-go:
	make prepare
	protoc -I ./proto \
		   -I /usr/local/include \
		   -I ${GOPATH}/src/github.com/envoyproxy/protoc-gen-validate \
		   --go_out ./generated/go --go_opt paths=source_relative \
		   --go-grpc_out ./generated/go --go-grpc_opt paths=source_relative \
		   --grpc-gateway_out ./generated/go --grpc-gateway_opt paths=source_relative \
		   ./proto/product/v1/product_service.proto
