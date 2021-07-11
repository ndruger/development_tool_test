package main

deny[msg] {
  input.private != true

  msg := "private should be true"
}
