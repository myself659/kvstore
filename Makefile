RELEASE_TYPE ?= minor
IMAGE = kvstore
TAG = $(shell git describe --abbrev=0 --tags)

init:
	# do nothing as for now

start:
	@cargo run --bin kvs

build-proto:
	@BUILD_PROTO=1 cargo build

build-release-local:
	@cargo build --release
	@cp ~/.target/release/kvc ./bin

build-release:
	@cargo build --release
	@cp ./target/release/kvs ./bin

bump-release:
	@cargo release $(RELEASE_TYPE) --no-dev-version --skip-publish --skip-tag

show-tag:
	@git tag -l --format='%(contents)' $(TAG)

build-docker:
	@docker build -t myself659/${IMAGE}:${TAG} .
	@docker tag myself659/${IMAGE}:${TAG} myself659/${IMAGE}:latest

push-docker:
	@docker push myself659/${IMAGE}:${TAG}
	@docker push myself659/${IMAGE}:latest
