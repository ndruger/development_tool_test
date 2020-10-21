#!/usr/bin/env bash
set -euo pipefail

function hello() {
  name="test"
  echo "Hello ${name}"
}

hello
