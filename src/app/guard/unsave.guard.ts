import { ProductComponent } from './../product/product.component';
import { Component } from '@angular/core';
import { CanDeactivate } from '@angular/router';
export class UnsaveGuard implements CanDeactivate<ProductComponent>{
    canDeactivate(Component: ProductComponent) {
    return window.confirm('还没有保存，确定要退出嘛？');
    }

}