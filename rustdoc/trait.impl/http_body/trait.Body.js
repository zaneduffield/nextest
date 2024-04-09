(function() {var implementors = {
"axum":[["impl&lt;S&gt; <a class=\"trait\" href=\"http_body/trait.Body.html\" title=\"trait http_body::Body\">Body</a> for <a class=\"struct\" href=\"axum/body/struct.StreamBody.html\" title=\"struct axum::body::StreamBody\">StreamBody</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"futures_core/stream/trait.TryStream.html\" title=\"trait futures_core::stream::TryStream\">TryStream</a>,\n    S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_core::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"bytes/bytes/struct.Bytes.html\" title=\"struct bytes::bytes::Bytes\">Bytes</a>&gt;,\n    S::<a class=\"associatedtype\" href=\"futures_core/stream/trait.TryStream.html#associatedtype.Error\" title=\"type futures_core::stream::TryStream::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"type\" href=\"axum/type.BoxError.html\" title=\"type axum::BoxError\">BoxError</a>&gt;,</div>"]],
"http_body":[],
"hyper":[["impl <a class=\"trait\" href=\"hyper/body/trait.HttpBody.html\" title=\"trait hyper::body::HttpBody\">Body</a> for <a class=\"struct\" href=\"hyper/body/struct.Body.html\" title=\"struct hyper::body::Body\">Body</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()