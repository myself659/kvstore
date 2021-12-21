use thiserror::Error;

#[derive(Debug, Error)]
pub enum KvError {
    #[error("Not found: {0}")]
    NotFound(String),
}
