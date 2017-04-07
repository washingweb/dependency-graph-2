set -e
set -u

oss_address=$DEP_GRAPH_OSS_PREFIX

oss cp ./dist/ $oss_address -rf
