(function() {var implementors = {};
implementors["kvstore"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/prost/0.8.0/prost/error/struct.EncodeError.html\" title=\"struct prost::error::EncodeError\">EncodeError</a>&gt; for <a class=\"enum\" href=\"kvstore/enum.KvError.html\" title=\"enum kvstore::KvError\">KvError</a>","synthetic":false,"types":["kvstore::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/prost/0.8.0/prost/error/struct.DecodeError.html\" title=\"struct prost::error::DecodeError\">DecodeError</a>&gt; for <a class=\"enum\" href=\"kvstore/enum.KvError.html\" title=\"enum kvstore::KvError\">KvError</a>","synthetic":false,"types":["kvstore::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"kvstore/enum.KvError.html\" title=\"enum kvstore::KvError\">KvError</a>","synthetic":false,"types":["kvstore::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.57.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"kvstore/enum.KvError.html\" title=\"enum kvstore::KvError\">KvError</a>","synthetic":false,"types":["kvstore::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;TLSError&gt; for <a class=\"enum\" href=\"kvstore/enum.KvError.html\" title=\"enum kvstore::KvError\">KvError</a>","synthetic":false,"types":["kvstore::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ConnectionError&gt; for <a class=\"enum\" href=\"kvstore/enum.KvError.html\" title=\"enum kvstore::KvError\">KvError</a>","synthetic":false,"types":["kvstore::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/toml/0.5/toml/de/struct.Error.html\" title=\"struct toml::de::Error\">Error</a>&gt; for <a class=\"enum\" href=\"kvstore/enum.KvError.html\" title=\"enum kvstore::KvError\">KvError</a>","synthetic":false,"types":["kvstore::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.57.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"kvstore/struct.Value.html\" title=\"struct kvstore::Value\">Value</a>","synthetic":false,"types":["kvstore::pb::abi::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"kvstore/struct.Value.html\" title=\"struct kvstore::Value\">Value</a>","synthetic":false,"types":["kvstore::pb::abi::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.i64.html\">i64</a>&gt; for <a class=\"struct\" href=\"kvstore/struct.Value.html\" title=\"struct kvstore::Value\">Value</a>","synthetic":false,"types":["kvstore::pb::abi::Value"]},{"text":"impl&lt;const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.array.html\">; N]</a>&gt; for <a class=\"struct\" href=\"kvstore/struct.Value.html\" title=\"struct kvstore::Value\">Value</a>","synthetic":false,"types":["kvstore::pb::abi::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Bytes&gt; for <a class=\"struct\" href=\"kvstore/struct.Value.html\" title=\"struct kvstore::Value\">Value</a>","synthetic":false,"types":["kvstore::pb::abi::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"kvstore/struct.Value.html\" title=\"struct kvstore::Value\">Value</a>&gt; for <a class=\"struct\" href=\"kvstore/struct.CommandResponse.html\" title=\"struct kvstore::CommandResponse\">CommandResponse</a>","synthetic":false,"types":["kvstore::pb::abi::CommandResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.57.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"kvstore/struct.Kvpair.html\" title=\"struct kvstore::Kvpair\">Kvpair</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.57.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"kvstore/struct.CommandResponse.html\" title=\"struct kvstore::CommandResponse\">CommandResponse</a>","synthetic":false,"types":["kvstore::pb::abi::CommandResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"kvstore/enum.KvError.html\" title=\"enum kvstore::KvError\">KvError</a>&gt; for <a class=\"struct\" href=\"kvstore/struct.CommandResponse.html\" title=\"struct kvstore::CommandResponse\">CommandResponse</a>","synthetic":false,"types":["kvstore::pb::abi::CommandResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.57.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"kvstore/struct.Value.html\" title=\"struct kvstore::Value\">Value</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.57.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"kvstore/struct.CommandResponse.html\" title=\"struct kvstore::CommandResponse\">CommandResponse</a>","synthetic":false,"types":["kvstore::pb::abi::CommandResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"kvstore/struct.Value.html\" title=\"struct kvstore::Value\">Value</a>","synthetic":false,"types":["kvstore::pb::abi::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.f64.html\">f64</a>&gt; for <a class=\"struct\" href=\"kvstore/struct.Value.html\" title=\"struct kvstore::Value\">Value</a>","synthetic":false,"types":["kvstore::pb::abi::Value"]},{"text":"impl&lt;Store:&nbsp;<a class=\"trait\" href=\"kvstore/trait.Storage.html\" title=\"trait kvstore::Storage\">Storage</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"kvstore/struct.ServiceInner.html\" title=\"struct kvstore::ServiceInner\">ServiceInner</a>&lt;Store&gt;&gt; for <a class=\"struct\" href=\"kvstore/struct.Service.html\" title=\"struct kvstore::Service\">Service</a>&lt;Store&gt;","synthetic":false,"types":["kvstore::service::Service"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"https://doc.rust-lang.org/1.57.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"kvstore/struct.Value.html\" title=\"struct kvstore::Value\">Value</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"kvstore/struct.Kvpair.html\" title=\"struct kvstore::Kvpair\">Kvpair</a>","synthetic":false,"types":["kvstore::pb::abi::Kvpair"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.57.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.tuple.html\">(</a>IVec, IVec<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.tuple.html\">)</a>, Error&gt;&gt; for <a class=\"struct\" href=\"kvstore/struct.Kvpair.html\" title=\"struct kvstore::Kvpair\">Kvpair</a>","synthetic":false,"types":["kvstore::pb::abi::Kvpair"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()