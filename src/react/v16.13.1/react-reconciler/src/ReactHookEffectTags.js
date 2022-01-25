/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type HookEffectTag = number;

export const NoEffect = /*  */ 0b000;

// Represents whether effect should fire.
// 目前根据源码阅读，发现似乎如果前后依赖项未发生变化时，最终会push一个不带HookHasEffect的effect到fiber的pdateQueue中。
export const HasEffect = /* */ 0b001;

// Represents the phase in which the effect (not the clean-up) fires.
export const Layout = /*    */ 0b010;
export const Passive = /*   */ 0b100;
