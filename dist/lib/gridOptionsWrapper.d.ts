// Type definitions for ag-grid v4.0.5
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { RowNode } from './entities/rowNode';
import { GridOptions } from './entities/gridOptions';
import { GridApi } from "./gridApi";
import { ColDef } from "./entities/colDef";
import { NodeChildDetails } from "./entities/gridOptions";
import { ColumnApi } from "./columnController/columnController";
import { GetContextMenuItems } from "./entities/gridOptions";
import { GetMainMenuItems } from "./entities/gridOptions";
import { ProcessRowParams } from "./entities/gridOptions";
import { ProcessCellForExportParams } from "./entities/gridOptions";
export declare class GridOptionsWrapper {
    private static MIN_COL_WIDTH;
    private gridOptions;
    private columnController;
    private eventService;
    private enterprise;
    private headerHeight;
    agWire(gridApi: GridApi, columnApi: ColumnApi): void;
    init(): void;
    isEnterprise(): boolean;
    isRowSelection(): boolean;
    isRowDeselection(): boolean;
    isRowSelectionMulti(): boolean;
    getContext(): any;
    isRowModelPagination(): boolean;
    isRowModelVirtual(): boolean;
    isRowModelDefault(): boolean;
    isShowToolPanel(): boolean;
    isToolPanelSuppressGroups(): boolean;
    isToolPanelSuppressValues(): boolean;
    isGroupSelectsChildren(): boolean;
    isGroupHideGroupColumns(): boolean;
    isGroupIncludeFooter(): boolean;
    isGroupSuppressBlankHeader(): boolean;
    isSuppressRowClickSelection(): boolean;
    isSuppressCellSelection(): boolean;
    isSuppressMultiSort(): boolean;
    isGroupSuppressAutoColumn(): boolean;
    isForPrint(): boolean;
    isSuppressHorizontalScroll(): boolean;
    isSuppressLoadingOverlay(): boolean;
    isSuppressNoRowsOverlay(): boolean;
    isSuppressFieldDotNotation(): boolean;
    getFloatingTopRowData(): any[];
    getFloatingBottomRowData(): any[];
    isUnSortIcon(): boolean;
    isSuppressMenuHide(): boolean;
    getRowStyle(): any;
    getRowClass(): any;
    getRowStyleFunc(): Function;
    getRowClassFunc(): Function;
    getBusinessKeyForNodeFunc(): (node: RowNode) => string;
    getHeaderCellRenderer(): any;
    getApi(): GridApi;
    getColumnApi(): ColumnApi;
    isEnableColResize(): boolean;
    isSingleClickEdit(): boolean;
    getGroupDefaultExpanded(): number;
    getGroupAggFunction(): (nodes: any[]) => any;
    getRowData(): any[];
    isGroupUseEntireRow(): boolean;
    getGroupColumnDef(): ColDef;
    isGroupSuppressRow(): boolean;
    getRowGroupPanelShow(): string;
    isAngularCompileRows(): boolean;
    isAngularCompileFilters(): boolean;
    isAngularCompileHeaders(): boolean;
    isDebug(): boolean;
    getColumnDefs(): any[];
    getDatasource(): any;
    isEnableSorting(): boolean;
    isEnableCellExpressions(): boolean;
    isEnableServerSideSorting(): boolean;
    isSuppressContextMenu(): boolean;
    isEnableFilter(): boolean;
    isEnableServerSideFilter(): boolean;
    isSuppressScrollLag(): boolean;
    isSuppressMovableColumns(): boolean;
    isSuppressColumnMoveAnimation(): boolean;
    isSuppressMenuColumnPanel(): boolean;
    isSuppressMenuFilterPanel(): boolean;
    isSuppressMenuMainPanel(): boolean;
    isEnableRangeSelection(): boolean;
    isRememberGroupStateWhenNewData(): boolean;
    getIcons(): any;
    getIsScrollLag(): () => boolean;
    getSortingOrder(): string[];
    getSlaveGrids(): GridOptions[];
    getGroupRowRenderer(): Function | Object;
    getOverlayLoadingTemplate(): string;
    getOverlayNoRowsTemplate(): string;
    getCheckboxSelection(): Function;
    isSuppressAutoSize(): boolean;
    isSuppressParentsInRowNodes(): boolean;
    isEnableStatusBar(): boolean;
    getHeaderCellTemplate(): string;
    getHeaderCellTemplateFunc(): (params: any) => string | HTMLElement;
    getNodeChildDetailsFunc(): ((dataItem: any) => NodeChildDetails);
    getContextMenuItemsFunc(): GetContextMenuItems;
    getMainMenuItemsFunc(): GetMainMenuItems;
    getProcessCellForClipboardFunc(): (params: ProcessCellForExportParams) => any;
    executeProcessRowPostCreateFunc(params: ProcessRowParams): void;
    getHeaderHeight(): number;
    setHeaderHeight(headerHeight: number): void;
    isExternalFilterPresent(): boolean;
    doesExternalFilterPass(node: RowNode): boolean;
    getGroupRowInnerRenderer(): (params: any) => void;
    getMinColWidth(): number;
    getMaxColWidth(): number;
    getColWidth(): number;
    getRowBuffer(): number;
    private checkForDeprecated();
    getLocaleTextFunc(): Function;
    globalEventHandler(eventName: string, event?: any): void;
    getRowHeightForVirtualPagination(): number;
    getRowHeightForNode(rowNode: RowNode): number;
}
