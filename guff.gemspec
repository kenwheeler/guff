Gem::Specification.new do |spec|
  spec.name          = "guff-compass"
  spec.version       = "1.0.0"
  spec.authors       = ["Ken Wheeler"]
  spec.email         = ["ken@outlook.com"]
  spec.summary       = %q{ All the Sass framework you need. }
  spec.description   = %q{ All the Sass framework you need.}
  spec.homepage      = "http://kenwheeler.github.io/guff/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency('sass', ">= 3.2")
  spec.add_dependency("compass", [">= 0.11"])
end
