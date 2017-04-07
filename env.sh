function source_it() {
  local assets_sub_directory=

  export DEP_GRAPH_ASSETS_SUB_DIRECTORY=${assets_sub_directory}
  export DEP_GRAPH_OSS_PREFIX=oss://dy-data${assets_sub_directory}
}

source_it
unset -f source_it
