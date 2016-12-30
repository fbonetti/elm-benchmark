module Benchmark exposing (..)

{-| This library is for investigating bugs or performance problems. It should
*not* be used in production code.
# Benchmarking
@docs measure
-}

import Native.Benchmark


{-| Prints the amount of time it takes for a thunk to complete
    to the developer console, and returns the value.
-}
measure : String -> (() -> a) -> a
measure =
    Native.Benchmark.measure
