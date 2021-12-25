FROM rust:latest AS chef
# We only pay the installation cost once,
# it will be cached from the second build onwards
RUN cargo install cargo-chef

WORKDIR /app

FROM chef AS planner
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

FROM chef AS builder
COPY --from=planner /app/recipe.json recipe.json
# Build dependencies - this is the caching Docker layer!
RUN cargo chef cook --release --recipe-path recipe.json

# Build application
COPY . .
RUN cargo install --path .

# We do not need the Rust toolchain to run the binary!
# FROM gcr.io/distroless/cc-debian11
# FROM alpine:3.14
# FROM alpine:latest
FROM debian:buster-slim
ARG APP=/usr/local/bin
COPY --from=builder /usr/local/cargo/bin/kvs /usr/local/bin
EXPOSE 9527
WORKDIR ${APP}
CMD [ "./kvs" ]
