"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MTableAction", {
  enumerable: true,
  get: function get() {
    return _mTableAction["default"];
  }
});
Object.defineProperty(exports, "MTableActions", {
  enumerable: true,
  get: function get() {
    return _mTableActions["default"];
  }
});
Object.defineProperty(exports, "MTableBody", {
  enumerable: true,
  get: function get() {
    return _mTableBody["default"];
  }
});
Object.defineProperty(exports, "MTableBodyRow", {
  enumerable: true,
  get: function get() {
    return _mTableBodyRow["default"];
  }
});
Object.defineProperty(exports, "MTableGroupRow", {
  enumerable: true,
  get: function get() {
    return _mTableGroupRow["default"];
  }
});
Object.defineProperty(exports, "MTableCell", {
  enumerable: true,
  get: function get() {
    return _mTableCell["default"];
  }
});
Object.defineProperty(exports, "MTableEditRow", {
  enumerable: true,
  get: function get() {
    return _mTableEditRow["default"];
  }
});
Object.defineProperty(exports, "MTableFilterRow", {
  enumerable: true,
  get: function get() {
    return _mTableFilterRow["default"];
  }
});
Object.defineProperty(exports, "MTableHeader", {
  enumerable: true,
  get: function get() {
    return _mTableHeader["default"];
  }
});
Object.defineProperty(exports, "MTablePagination", {
  enumerable: true,
  get: function get() {
    return _mTablePagination["default"];
  }
});
Object.defineProperty(exports, "MTableSteppedPagination", {
  enumerable: true,
  get: function get() {
    return _mTableSteppedPagination["default"];
  }
});
Object.defineProperty(exports, "MTableToolbar", {
  enumerable: true,
  get: function get() {
    return _mTableToolbar["default"];
  }
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@material-ui/core");

var _reactDoubleScrollbar = _interopRequireDefault(require("react-double-scrollbar"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _mTableAction = _interopRequireDefault(require("./m-table-action"));

var _mTableActions = _interopRequireDefault(require("./m-table-actions"));

var _mTableBody = _interopRequireDefault(require("./m-table-body"));

var _mTableBodyRow = _interopRequireDefault(require("./m-table-body-row"));

var _mTableGroupbar = _interopRequireDefault(require("./m-table-groupbar"));

var _mTableGroupRow = _interopRequireDefault(require("./m-table-group-row"));

var _mTableCell = _interopRequireDefault(require("./m-table-cell"));

var _mTableEditRow = _interopRequireDefault(require("./m-table-edit-row"));

var _mTableFilterRow = _interopRequireDefault(require("./m-table-filter-row"));

var _mTableHeader = _interopRequireDefault(require("./m-table-header"));

var _mTablePagination = _interopRequireDefault(require("./m-table-pagination"));

var _mTableSteppedPagination = _interopRequireDefault(require("./m-table-stepped-pagination"));

var _mTableToolbar = _interopRequireDefault(require("./m-table-toolbar"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _dataManager = _interopRequireDefault(require("./utils/data-manager"));

var _debounce = require("debounce");

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */
var ESSTable =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ESSTable, _React$Component);

  function ESSTable(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ESSTable);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ESSTable).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dataManager", new _dataManager["default"]());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSelectionChange", function () {
      if (_this.props.onSelectionChange) {
        var selectedRows = [];

        var findSelecteds = function findSelecteds(list) {
          list.forEach(function (row) {
            if (row.tableData.checked) {
              selectedRows.push(row);
            }

            row.tableData.childRows && findSelecteds(row.tableData.childRows);
          });
        };

        findSelecteds(_this.state.data);

        _this.props.onSelectionChange(selectedRows);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangePage", function () {
      var _this$props;

      _this.props.onChangePage && (_this$props = _this.props).onChangePage.apply(_this$props, arguments);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeRowsPerPage", function () {
      var _this$props2;

      _this.props.onChangeRowsPerPage && (_this$props2 = _this.props).onChangeRowsPerPage.apply(_this$props2, arguments);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onOrderChange", function () {
      var _this$props3;

      _this.props.onOrderChange && (_this$props3 = _this.props).onOrderChange.apply(_this$props3, arguments);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isRemoteData", function () {
      return !Array.isArray(_this.props.data);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onQueryChange", function (query) {
      query = (0, _objectSpread2["default"])({}, _this.state.query, query);

      _this.setState({
        isLoading: true
      }, function () {
        _this.props.data(query).then(function (result) {
          query.totalCount = result.totalCount;
          query.page = result.page;

          _this.dataManager.setData(result.data);

          _this.setState((0, _objectSpread2["default"])({
            isLoading: false
          }, _this.dataManager.getRenderState(), {
            query: query
          }));
        });
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSearchChange", (0, _debounce.debounce)(function () {
      _this.dataManager.changeSearchText(_this.state.searchText);

      if (_this.isRemoteData()) {
        var query = (0, _objectSpread2["default"])({}, _this.state.query);
        query.page = 0;
        query.search = _this.state.searchText;

        _this.onQueryChange(query);
      } else {
        _this.setState(_this.dataManager.getRenderState());
      }
    }, _this.props.options.debounceInterval));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onFilterChange", (0, _debounce.debounce)(function () {
      if (_this.isRemoteData()) {
        var query = (0, _objectSpread2["default"])({}, _this.state.query);
        query.filters = _this.state.columns.filter(function (a) {
          return a.tableData.filterValue;
        }).map(function (a) {
          return {
            column: a,
            operator: "=",
            value: a.tableData.filterValue
          };
        });

        _this.onQueryChange(query);
      } else {
        _this.setState(_this.dataManager.getRenderState());
      }
    }, _this.props.options.debounceInterval));

    var calculatedProps = _this.getProps(props);

    _this.setDataManagerFields(calculatedProps, true);

    _this.state = (0, _objectSpread2["default"])({
      data: []
    }, _this.dataManager.getRenderState(), {
      query: {
        filters: [],
        orderBy: null,
        orderDirection: 'asc',
        page: 0,
        pageSize: calculatedProps.options.pageSize,
        search: '',
        totalCount: 0
      },
      showAddRow: false
    });
    return _this;
  }

  (0, _createClass2["default"])(ESSTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState(this.dataManager.getRenderState(), function () {
        if (_this2.isRemoteData()) {
          _this2.onQueryChange(_this2.state.query);
        }
      });
    }
  }, {
    key: "setDataManagerFields",
    value: function setDataManagerFields(props, isInit) {
      var defaultSortColumnIndex = -1;
      var defaultSortDirection = '';

      if (props) {
        defaultSortColumnIndex = props.columns.findIndex(function (a) {
          return a.defaultSort;
        });
        defaultSortDirection = defaultSortColumnIndex > -1 ? props.columns[defaultSortColumnIndex].defaultSort : '';
      }

      this.dataManager.setColumns(props.columns);

      if (this.isRemoteData()) {
        this.dataManager.changeApplySearch(false);
        this.dataManager.changeApplyFilters(false);
      } else {
        this.dataManager.changeApplySearch(true);
        this.dataManager.changeApplyFilters(true);
        this.dataManager.setData(props.data);
      }

      isInit && this.dataManager.changeCurrentPage(props.options.initialPage ? props.options.initialPage : 0);
      isInit && this.dataManager.changePageSize(props.options.pageSize);
      isInit && this.dataManager.changeOrder(defaultSortColumnIndex, defaultSortDirection);
      isInit && this.dataManager.changePaging(props.options.paging);
      isInit && this.dataManager.changeParentFunc(props.parentChildData);
      this.dataManager.changeDetailPanelType(props.options.detailPanelType);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var props = this.getProps(nextProps);
      this.setDataManagerFields(props);
      this.setState(this.dataManager.getRenderState());
    }
  }, {
    key: "getProps",
    value: function getProps(props) {
      var _this3 = this;

      var calculatedProps = (0, _objectSpread2["default"])({}, props || this.props);
      var localization = calculatedProps.localization.body;
      calculatedProps.actions = (0, _toConsumableArray2["default"])(calculatedProps.actions || []);

      if (calculatedProps.editable) {
        if (calculatedProps.editable.onRowAdd) {
          calculatedProps.actions.push({
            icon: calculatedProps.icons.Add,
            tooltip: localization.addTooltip,
            isFreeAction: true,
            onClick: function onClick() {
              _this3.dataManager.changeRowEditing();

              _this3.setState((0, _objectSpread2["default"])({}, _this3.dataManager.getRenderState(), {
                showAddRow: !_this3.state.showAddRow
              }));
            }
          });
        }

        if (calculatedProps.editable.onRowUpdate) {
          calculatedProps.actions.push({
            icon: calculatedProps.icons.Edit,
            tooltip: localization.editTooltip,
            onClick: function onClick(e, rowData) {
              _this3.dataManager.changeRowEditing(rowData, "update");

              _this3.setState((0, _objectSpread2["default"])({}, _this3.dataManager.getRenderState(), {
                showAddRow: false
              }));
            }
          });
        }

        if (calculatedProps.editable.onRowDelete) {
          calculatedProps.actions.push({
            icon: calculatedProps.icons.Delete,
            tooltip: localization.deleteTooltip,
            onClick: function onClick(e, rowData) {
              _this3.dataManager.changeRowEditing(rowData, "delete");

              _this3.setState((0, _objectSpread2["default"])({}, _this3.dataManager.getRenderState(), {
                showAddRow: false
              }));
            }
          });
        }
      }

      calculatedProps.components = (0, _objectSpread2["default"])({}, ESSTable.defaultProps.components, calculatedProps.components);
      calculatedProps.icons = (0, _objectSpread2["default"])({}, ESSTable.defaultProps.icons, calculatedProps.icons);
      calculatedProps.options = (0, _objectSpread2["default"])({}, ESSTable.defaultProps.options, calculatedProps.options);
      return calculatedProps;
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this4 = this;

      var props = this.getProps();

      if (props.options.paging) {
        var localization = (0, _objectSpread2["default"])({}, ESSTable.defaultProps.localization.pagination, this.props.localization.pagination);
        return React.createElement(_core.Table, null, React.createElement(_core.TableFooter, {
          style: {
            display: 'grid'
          }
        }, React.createElement(_core.TableRow, null, React.createElement(props.components.Pagination, {
          classes: {
            root: props.classes.paginationRoot,
            toolbar: props.classes.paginationToolbar,
            caption: props.classes.paginationCaption,
            selectRoot: props.classes.paginationSelectRoot
          },
          style: {
            "float": props.theme.direction === "rtl" ? "" : "right",
            overflowX: 'auto'
          },
          colSpan: 3,
          count: this.isRemoteData() ? this.state.query.totalCount : this.state.data.length,
          icons: props.icons,
          rowsPerPage: this.state.pageSize,
          rowsPerPageOptions: props.options.pageSizeOptions,
          SelectProps: {
            renderValue: function renderValue(value) {
              return React.createElement("div", {
                style: {
                  padding: '0px 5px'
                }
              }, value + ' ' + localization.labelRowsSelect + ' ');
            }
          },
          page: this.isRemoteData() ? this.state.query.page : this.state.currentPage,
          onChangePage: function onChangePage(event, page) {
            if (_this4.isRemoteData()) {
              var query = (0, _objectSpread2["default"])({}, _this4.state.query);
              query.page = page;

              _this4.onQueryChange(query);
            } else {
              _this4.dataManager.changeCurrentPage(page);

              _this4.setState(_this4.dataManager.getRenderState(), function () {
                _this4.onChangePage(page);
              });
            }
          },
          onChangeRowsPerPage: function onChangeRowsPerPage(event) {
            _this4.dataManager.changePageSize(event.target.value);

            if (_this4.isRemoteData()) {
              var query = (0, _objectSpread2["default"])({}, _this4.state.query);
              query.pageSize = event.target.value;
              query.page = 0;

              _this4.onQueryChange(query);
            } else {
              _this4.dataManager.changeCurrentPage(0);

              _this4.setState(_this4.dataManager.getRenderState(), function () {
                _this4.onChangeRowsPerPage(event.target.value);
              });
            }
          },
          ActionsComponent: function ActionsComponent(subProps) {
            return props.options.paginationType === 'normal' ? React.createElement(_mTablePagination["default"], (0, _extends2["default"])({}, subProps, {
              icons: props.icons,
              localization: localization
            })) : React.createElement(_mTableSteppedPagination["default"], (0, _extends2["default"])({}, subProps, {
              icons: props.icons,
              localization: localization
            }));
          },
          labelDisplayedRows: function labelDisplayedRows(row) {
            return localization.labelDisplayedRows.replace('{from}', row.from).replace('{to}', row.to).replace('{count}', row.count);
          },
          labelRowsPerPage: localization.labelRowsPerPage
        }))));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var props = this.getProps();
      return React.createElement(_reactBeautifulDnd.DragDropContext, {
        onDragEnd: function onDragEnd(result) {
          _this5.dataManager.changeByDrag(result);

          _this5.setState(_this5.dataManager.getRenderState());
        }
      }, React.createElement(props.components.Container, {
        style: {
          position: 'relative'
        }
      }, props.options.toolbar && React.createElement(props.components.Toolbar, {
        actions: props.actions,
        components: props.components,
        selectedRows: this.state.selectedCount > 0 ? this.state.originalData.filter(function (a) {
          return a.tableData.checked;
        }) : [],
        columns: this.state.columns,
        columnsButton: props.options.columnsButton,
        icons: props.icons,
        exportButton: props.options.exportButton,
        exportDelimiter: props.options.exportDelimiter,
        exportFileName: props.options.exportFileName,
        exportCsv: props.options.exportCsv,
        data: this.state.data,
        renderData: this.state.renderData,
        search: props.options.search,
        showTitle: props.options.showTitle,
        toolbarButtonAlignment: props.options.toolbarButtonAlignment,
        searchFieldAlignment: props.options.searchFieldAlignment,
        searchText: this.state.searchText,
        searchFieldStyle: props.options.searchFieldStyle,
        title: props.title,
        onSearchChanged: function onSearchChanged(searchText) {
          return _this5.setState({
            searchText: searchText
          }, _this5.onSearchChange);
        },
        onColumnsChanged: function onColumnsChanged(columnId, hidden) {
          _this5.dataManager.changeColumnHidden(columnId, hidden);

          _this5.setState(_this5.dataManager.getRenderState());
        },
        localization: (0, _objectSpread2["default"])({}, ESSTable.defaultProps.localization.toolbar, this.props.localization.toolbar)
      }), props.options.grouping && React.createElement(props.components.Groupbar, {
        icons: props.icons,
        localization: (0, _objectSpread2["default"])({}, ESSTable.defaultProps.localization.grouping, props.localization.grouping),
        groupColumns: this.state.columns.filter(function (col) {
          return col.tableData.groupOrder > -1;
        }).sort(function (col1, col2) {
          return col1.tableData.groupOrder - col2.tableData.groupOrder;
        }),
        onSortChanged: function onSortChanged(groupedColumn) {
          _this5.dataManager.changeGroupOrder(groupedColumn.tableData.id);

          _this5.setState(_this5.dataManager.getRenderState());
        },
        onGroupRemoved: function onGroupRemoved(groupedColumn, index) {
          var result = {
            combine: null,
            destination: {
              droppableId: "headers",
              index: 0
            },
            draggableId: groupedColumn.tableData.id,
            mode: "FLUID",
            reason: "DROP",
            source: {
              index: index,
              droppableId: "groups"
            },
            type: "DEFAULT"
          };

          _this5.dataManager.changeByDrag(result);

          _this5.setState(_this5.dataManager.getRenderState());
        }
      }), React.createElement(ScrollBar, {
        "double": props.options.doubleHorizontalScroll
      }, React.createElement(_reactBeautifulDnd.Droppable, {
        droppableId: "headers",
        direction: "horizontal"
      }, function (provided, snapshot) {
        return React.createElement("div", {
          ref: provided.innerRef //style={this.getListStyle(snapshot.isDraggingOver)}

        }, React.createElement("div", {
          style: {
            maxHeight: props.options.maxBodyHeight,
            overflowY: 'auto'
          }
        }, React.createElement(_core.Table, null, props.options.header && React.createElement(props.components.Header, {
          localization: (0, _objectSpread2["default"])({}, ESSTable.defaultProps.localization.header, _this5.props.localization.header),
          columns: _this5.state.columns,
          hasSelection: props.options.selection,
          headerStyle: props.options.headerStyle,
          selectedCount: _this5.state.selectedCount,
          dataCount: props.parentChildData ? _this5.state.treefiedDataLength : _this5.state.data.length,
          hasDetailPanel: !!props.detailPanel,
          showActionsColumn: props.actions && props.actions.filter(function (a) {
            return !a.isFreeAction && !_this5.props.options.selection;
          }).length > 0,
          showSelectAllCheckbox: props.options.showSelectAllCheckbox,
          orderBy: _this5.state.orderBy,
          orderDirection: _this5.state.orderDirection,
          onAllSelected: function onAllSelected(checked) {
            _this5.dataManager.changeAllSelected(checked);

            _this5.setState(_this5.dataManager.getRenderState(), function () {
              return _this5.onSelectionChange();
            });
          },
          onOrderChange: function onOrderChange(orderBy, orderDirection) {
            _this5.dataManager.changeOrder(orderBy, orderDirection);

            if (_this5.isRemoteData()) {
              var query = (0, _objectSpread2["default"])({}, _this5.state.query);
              query.page = 0;
              query.orderBy = _this5.state.columns.find(function (a) {
                return a.tableData.id === orderBy;
              });
              query.orderDirection = orderDirection;

              _this5.onQueryChange(query);
            } else {
              _this5.setState(_this5.dataManager.getRenderState(), function () {
                _this5.onOrderChange(orderBy, orderDirection);
              });
            }
          },
          actionsHeaderIndex: props.options.actionsColumnIndex,
          sorting: props.options.sorting,
          grouping: props.options.grouping,
          isTreeData: _this5.props.parentChildData !== undefined
        }), React.createElement(props.components.Body, {
          actions: props.actions,
          components: props.components,
          icons: props.icons,
          renderData: _this5.state.renderData,
          currentPage: _this5.state.currentPage,
          pageSize: _this5.state.pageSize,
          columns: _this5.state.columns,
          detailPanel: props.detailPanel,
          options: props.options,
          getFieldValue: _this5.dataManager.getFieldValue,
          isTreeData: _this5.props.parentChildData !== undefined,
          onFilterChanged: function onFilterChanged(columnId, value) {
            _this5.dataManager.changeFilterValue(columnId, value);

            _this5.setState({}, function () {
              return _this5.onFilterChange();
            });
          },
          onFilterSelectionChanged: function onFilterSelectionChanged(event) {
            _this5.dataManager.changeFilterSelectionChecked(event.target.checked);

            _this5.setState(_this5.dataManager.getRenderState());
          },
          onRowSelected: function onRowSelected(event, path) {
            _this5.dataManager.changeRowSelected(event.target.checked, path);

            _this5.setState(_this5.dataManager.getRenderState(), function () {
              return _this5.onSelectionChange();
            });
          },
          onToggleDetailPanel: function onToggleDetailPanel(path, render) {
            _this5.dataManager.changeDetailPanelVisibility(path, render);

            _this5.setState(_this5.dataManager.getRenderState());
          },
          onGroupExpandChanged: function onGroupExpandChanged(path) {
            _this5.dataManager.changeGroupExpand(path);

            _this5.setState(_this5.dataManager.getRenderState());
          },
          onTreeExpandChanged: function onTreeExpandChanged(path) {
            _this5.dataManager.changeTreeExpand(path);

            _this5.setState(_this5.dataManager.getRenderState());
          },
          onEditingCanceled: function onEditingCanceled(mode, rowData) {
            if (mode === "add") {
              _this5.setState({
                showAddRow: false
              });
            } else if (mode === "update" || mode === "delete") {
              _this5.dataManager.changeRowEditing(rowData);

              _this5.setState(_this5.dataManager.getRenderState());
            }
          },
          onEditingApproved: function onEditingApproved(mode, newData, oldData) {
            if (mode === "add") {
              _this5.setState({
                isLoading: true
              }, function () {
                _this5.props.editable.onRowAdd(newData).then(function (result) {
                  _this5.setState({
                    isLoading: false,
                    showAddRow: false
                  }, function () {
                    if (_this5.isRemoteData()) {
                      _this5.onQueryChange(_this5.state.query);
                    }
                  });
                })["catch"](function (reason) {
                  _this5.setState({
                    isLoading: false
                  });
                });
              });
            } else if (mode === "update") {
              _this5.setState({
                isLoading: true
              }, function () {
                _this5.props.editable.onRowUpdate(newData, oldData).then(function (result) {
                  _this5.dataManager.changeRowEditing(oldData);

                  _this5.setState((0, _objectSpread2["default"])({
                    isLoading: false
                  }, _this5.dataManager.getRenderState()), function () {
                    if (_this5.isRemoteData()) {
                      _this5.onQueryChange(_this5.state.query);
                    }
                  });
                })["catch"](function (reason) {
                  _this5.setState({
                    isLoading: false
                  });
                });
              });
            } else if (mode === "delete") {
              _this5.setState({
                isLoading: true
              }, function () {
                _this5.props.editable.onRowDelete(oldData).then(function (result) {
                  _this5.dataManager.changeRowEditing(oldData);

                  _this5.setState((0, _objectSpread2["default"])({
                    isLoading: false
                  }, _this5.dataManager.getRenderState()), function () {
                    if (_this5.isRemoteData()) {
                      _this5.onQueryChange(_this5.state.query);
                    }
                  });
                })["catch"](function (reason) {
                  _this5.setState({
                    isLoading: false
                  });
                });
              });
            }
          },
          localization: (0, _objectSpread2["default"])({}, ESSTable.defaultProps.localization.body, _this5.props.localization.body),
          onRowClick: _this5.props.onRowClick,
          showAddRow: _this5.state.showAddRow,
          hasAnyEditingRow: !!(_this5.state.lastEditingRow || _this5.state.showAddRow),
          hasDetailPanel: !!props.detailPanel
        }))), provided.placeholder);
      })), (this.state.isLoading || props.isLoading) && props.options.loadingType === "linear" && React.createElement("div", {
        style: {
          position: 'relative',
          width: '100%'
        }
      }, React.createElement("div", {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%'
        }
      }, React.createElement(_core.LinearProgress, null))), this.renderFooter(), (this.state.isLoading || props.isLoading) && props.options.loadingType === 'overlay' && React.createElement("div", {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%'
        }
      }, React.createElement("div", {
        style: {
          display: 'table',
          width: '100%',
          height: '100%',
          backgroundColor: '#FFFFFFAA'
        }
      }, React.createElement("div", {
        style: {
          display: 'table-cell',
          width: '100%',
          height: '100%',
          verticalAlign: 'middle',
          textAlign: 'center'
        }
      }, React.createElement(_core.CircularProgress, null))))));
    }
  }]);
  return ESSTable;
}(React.Component);

var ScrollBar = function ScrollBar(_ref) {
  var _double = _ref["double"],
      children = _ref.children;

  if (_double) {
    return React.createElement(_reactDoubleScrollbar["default"], null, children);
  } else {
    return React.createElement("div", {
      style: {
        overflowX: 'auto'
      }
    }, children);
  }
};

ESSTable.defaultProps = {
  actions: [],
  classes: {},
  columns: [],
  components: {
    Action: _mTableAction["default"],
    Actions: _mTableActions["default"],
    Body: _mTableBody["default"],
    Cell: _mTableCell["default"],
    Container: _core.Paper,
    EditRow: _mTableEditRow["default"],
    FilterRow: _mTableFilterRow["default"],
    Groupbar: _mTableGroupbar["default"],
    GroupRow: _mTableGroupRow["default"],
    Header: _mTableHeader["default"],
    Pagination: _core.TablePagination,
    Row: _mTableBodyRow["default"],
    Toolbar: _mTableToolbar["default"]
  },
  data: [],
  icons: {
    /* eslint-disable react/display-name */
    Add: function Add(props) {
      return React.createElement(_core.Icon, props, "add_box");
    },
    Check: function Check(props) {
      return React.createElement(_core.Icon, props, "check");
    },
    Clear: function Clear(props) {
      return React.createElement(_core.Icon, props, "clear");
    },
    Delete: function Delete(props) {
      return React.createElement(_core.Icon, props, "delete_outline");
    },
    DetailPanel: function DetailPanel(props) {
      return React.createElement(_core.Icon, props, "chevron_right");
    },
    Edit: function Edit(props) {
      return React.createElement(_core.Icon, props, "edit");
    },
    Export: function Export(props) {
      return React.createElement(_core.Icon, props, "save_alt");
    },
    Filter: function Filter(props) {
      return React.createElement(_core.Icon, props, "filter_list");
    },
    FirstPage: function FirstPage(props) {
      return React.createElement(_core.Icon, props, "first_page");
    },
    LastPage: function LastPage(props) {
      return React.createElement(_core.Icon, props, "last_page");
    },
    NextPage: function NextPage(props) {
      return React.createElement(_core.Icon, props, "chevron_right");
    },
    PreviousPage: function PreviousPage(props) {
      return React.createElement(_core.Icon, props, "chevron_left");
    },
    ResetSearch: function ResetSearch(props) {
      return React.createElement(_core.Icon, props, "clear");
    },
    Search: function Search(props) {
      return React.createElement(_core.Icon, props, "search");
    },
    SortArrow: function SortArrow(props) {
      return React.createElement(_core.Icon, props, "arrow_upward");
    },
    ThirdStateCheck: function ThirdStateCheck(props) {
      return React.createElement(_core.Icon, props, "remove");
    },
    ViewColumn: function ViewColumn(props) {
      return React.createElement(_core.Icon, props, "view_column");
    }
    /* eslint-enable react/display-name */

  },
  isLoading: false,
  title: 'Table Title',
  options: {
    actionsColumnIndex: 0,
    columnsButton: false,
    detailPanelType: 'multiple',
    debounceInterval: 200,
    doubleHorizontalScroll: false,
    emptyRowsWhenPaging: true,
    exportButton: false,
    exportDelimiter: ',',
    filtering: false,
    header: true,
    loadingType: 'overlay',
    paging: true,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
    paginationType: 'normal',
    showEmptyDataSourceMessage: true,
    showSelectAllCheckbox: true,
    search: true,
    showTitle: true,
    toolbarButtonAlignment: 'right',
    searchFieldAlignment: 'right',
    searchFieldStyle: {},
    selection: false,
    sorting: true,
    toolbar: true
  },
  localization: {
    grouping: {
      groupedBy: 'Grouped By:',
      placeholder: 'Drag headers here to group by'
    },
    pagination: {
      labelDisplayedRows: '{from}-{to} of {count}',
      labelRowsPerPage: 'Rows per page:',
      labelRowsSelect: 'rows'
    },
    toolbar: {},
    header: {},
    body: {
      filterRow: {},
      editRow: {
        saveTooltip: 'Save',
        cancelTooltip: 'Cancel',
        deleteText: 'Are you sure delete this row?'
      },
      addTooltip: 'Add',
      deleteTooltip: 'Delete',
      editTooltip: 'Edit'
    }
  }
};
ESSTable.propTypes = {
  actions: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    icon: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func, _propTypes["default"].string]).isRequired,
    isFreeAction: _propTypes["default"].bool,
    tooltip: _propTypes["default"].string,
    onClick: _propTypes["default"].func.isRequired,
    iconProps: _propTypes["default"].object
  })])),
  columns: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    cellStyle: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
    currencySetting: _propTypes["default"].shape({
      locale: _propTypes["default"].string,
      currencyCode: _propTypes["default"].string,
      minimumFractionDigits: _propTypes["default"].number,
      maximumFractionDigits: _propTypes["default"].number
    }),
    customFilterAndSearch: _propTypes["default"].func,
    customSort: _propTypes["default"].func,
    defaultFilter: _propTypes["default"].any,
    defaultSort: _propTypes["default"].oneOf(['asc', 'desc']),
    grouping: _propTypes["default"].bool,
    emptyValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node, _propTypes["default"].func]),
    "export": _propTypes["default"].bool,
    field: _propTypes["default"].string,
    filtering: _propTypes["default"].bool,
    headerStyle: _propTypes["default"].object,
    hidden: _propTypes["default"].bool,
    lookup: _propTypes["default"].object,
    readonly: _propTypes["default"].bool,
    removable: _propTypes["default"].bool,
    render: _propTypes["default"].func,
    searchable: _propTypes["default"].bool,
    sorting: _propTypes["default"].bool,
    title: _propTypes["default"].string,
    type: _propTypes["default"].oneOf(['string', 'boolean', 'numeric', 'date', 'datetime', 'time', 'currency'])
  })).isRequired,
  components: _propTypes["default"].shape({
    Action: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Actions: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Body: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Cell: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Container: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    EditRow: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    FilterRow: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Groupbar: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    GroupRow: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Header: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Pagination: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Row: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Toolbar: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func])
  }),
  data: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].object), _propTypes["default"].func]).isRequired,
  editable: _propTypes["default"].shape({
    onRowAdd: _propTypes["default"].func,
    onRowUpdate: _propTypes["default"].func,
    onRowDelete: _propTypes["default"].func
  }),
  detailPanel: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
    disabled: _propTypes["default"].bool,
    icon: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func, _propTypes["default"].string]),
    openIcon: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func, _propTypes["default"].string]),
    tooltip: _propTypes["default"].string,
    render: _propTypes["default"].func.isRequired
  })]))]),
  icons: _propTypes["default"].shape({
    Add: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Check: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Clear: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Delete: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    DetailPanel: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Edit: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Export: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Filter: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    FirstPage: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    LastPage: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    NextPage: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    PreviousPage: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    ResetSearch: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    Search: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    SortArrow: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    ThirdStateCheck: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    ViewColumn: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func])
  }),
  isLoading: _propTypes["default"].bool,
  title: _propTypes["default"].string,
  options: _propTypes["default"].shape({
    actionsColumnIndex: _propTypes["default"].number,
    columnsButton: _propTypes["default"].bool,
    debounceInterval: _propTypes["default"].number,
    detailPanelType: _propTypes["default"].oneOf(['single', 'multiple']),
    doubleHorizontalScroll: _propTypes["default"].bool,
    emptyRowsWhenPaging: _propTypes["default"].bool,
    exportButton: _propTypes["default"].bool,
    exportDelimiter: _propTypes["default"].string,
    exportFileName: _propTypes["default"].string,
    exportCsv: _propTypes["default"].func,
    filtering: _propTypes["default"].bool,
    header: _propTypes["default"].bool,
    headerStyle: _propTypes["default"].object,
    initialPage: _propTypes["default"].number,
    maxBodyHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
    loadingType: _propTypes["default"].oneOf(['overlay', 'linear']),
    paging: _propTypes["default"].bool,
    pageSize: _propTypes["default"].number,
    pageSizeOptions: _propTypes["default"].arrayOf(_propTypes["default"].number),
    paginationType: _propTypes["default"].oneOf(['normal', 'stepped']),
    rowStyle: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
    showEmptyDataSourceMessage: _propTypes["default"].bool,
    showSelectAllCheckbox: _propTypes["default"].bool,
    search: _propTypes["default"].bool,
    showTitle: _propTypes["default"].bool,
    toolbarButtonAlignment: _propTypes["default"].oneOf(['left', 'right']),
    searchFieldAlignment: _propTypes["default"].oneOf(['left', 'right']),
    searchFieldStyle: _propTypes["default"].object,
    selection: _propTypes["default"].bool,
    sorting: _propTypes["default"].bool,
    toolbar: _propTypes["default"].bool
  }),
  localization: _propTypes["default"].shape({
    grouping: _propTypes["default"].shape({
      groupedBy: _propTypes["default"].string,
      placeholder: _propTypes["default"].string
    }),
    pagination: _propTypes["default"].object,
    toolbar: _propTypes["default"].object,
    header: _propTypes["default"].object,
    body: _propTypes["default"].object
  }),
  onSelectionChange: _propTypes["default"].func,
  onChangeRowsPerPage: _propTypes["default"].func,
  onChangePage: _propTypes["default"].func,
  onOrderChange: _propTypes["default"].func,
  onRowClick: _propTypes["default"].func,
  tableRef: _propTypes["default"].any
};

var styles = function styles(theme) {
  return {
    paginationRoot: {
      width: '100%'
    },
    paginationToolbar: {
      padding: 0,
      width: '100%'
    },
    paginationCaption: {
      display: 'none'
    },
    paginationSelectRoot: {
      margin: 0
    }
  };
};

var _default = (0, _core.withStyles)(styles, {
  withTheme: true
})(function (props) {
  return React.createElement(ESSTable, (0, _extends2["default"])({}, props, {
    ref: props.tableRef
  }));
});

exports["default"] = _default;