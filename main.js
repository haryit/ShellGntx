html {
  --color-primary: #1479ff;
  --color-primary-font: #FFF;
  --color-primary-shadow: #1479ff66;
  --color-secondary: #e4edff;
  --color-secondary-font: #124991;
  --color-tertiary: #68b8c8;
  --color-tertiary-font: #021c22;
  --color-background: #f8fbff;
  --color-background-font: #193b68;
  --color-background-shadow: #0000001c;
  --color-background-border: rgba(0,0,0,0.08);
  --color-surface: #FFF;
  --color-surface-font: #193b68;
  --color-surface-shadow: #0000001c;
  --color-surface-border: rgba(0,0,0,0.08);
  --color-form: #FFF;
  --color-form-font: #193b68;
  --color-form-border: rgba(0,0,0,0.12);
  --color-form-stripe: #FFF;
  --color-state-danger: #ffeaec;
  --color-state-danger-font: #7f1a1a;
  --color-state-warning: #fff0da;
  --color-state-warning-font: #66440b;
  --color-state-success: #d9edd9;
  --color-state-success-font: #3d513d;
  --color-state-info: #bbdefb;
  --color-state-info-font: #09528d;
  --color-red: #d9534f;
  --color-green: #00aba9;
  --color-yellow: #f0ad4e;
  --color-blue: #3687f2;
  --color-silver: #939393;
}

html.dark {
  --color-primary: #87bbff;
  --color-primary-font: #021c22;
  --color-primary-shadow: transparent;
  --color-secondary: #383838;
  --color-secondary-font: #cbcbcb;
  --color-tertiary: #68b8c8;
  --color-tertiary-font: #021c22;
  --color-background: #121212;
  --color-background-font: #e8e6e6;
  --color-background-shadow: transparent;
  --color-background-border: rgba(255,255,255,0.08);
  --color-surface: #1e1e1e;
  --color-surface-font: #FFF;
  --color-surface-shadow: transparent;
  --color-surface-border: rgba(255,255,255,0.08);
  --color-form: #292929;
  --color-form-font: #FFF;
  --color-form-border: rgba(255,255,255,0.12);
  --color-form-stripe: #cccccc;
  --color-state-danger: #663333;
  --color-state-danger-font: #ffe2e1;
  --color-state-warning: #554123;
  --color-state-warning-font: #ffeed4;
  --color-state-success: #3a533b;
  --color-state-success-font: #cdfcd1;
  --color-state-info: #163045;
  --color-state-info-font: #acd8ff;
  --color-red: #ac3939;
  --color-green: #34712d;
  --color-yellow: #aea23d;
  --color-blue: #5c8ccc;
  --color-silver: #666666;
}

.--box {
  transition: box-shadow 300ms linear;
  background-color: var(--color-surface);
  color: var(--color-surface-font);
  border: 1px solid transparent;
  overflow: hidden;
}

.--box.button {
  padding: 8px 12px;
  transition: border-color 300ms linear;
  cursor: pointer;
}

.--box.button:hover {
  border-color: currentColor !important;
}

.--box.round {
  border-radius: 24px;
}

.--box.square {
  border-radius: 8px;
}

.--box.shadow {
  box-shadow: 0 12px 30px -7px var(--color-surface-shadow);
}

.--box.border {
  border: 1px solid var(--color-surface-border);
}

.--box.tag {
  display: inline;
  padding: 4px 16px;
  font-size: 0.875em;
}

.--box.back {
  background-color: transparent;
}

.--box.back.shadow {
  box-shadow: 0 12px 30px -7px var(--color-background-shadow);
}

.--box.back.border {
  border: 1px solid var(--color-background-border);
}

.--box.primary {
  background-color: var(--color-primary);
  color: var(--color-primary-font);
}

.--box.primary.shadow {
  box-shadow: 0 12px 30px -7px var(--color-primary-shadow);
}

.--box.primary.border {
  border: 1px solid var(--color-background-border);
}

.--box.secondary {
  background-color: var(--color-secondary);
  color: var(--color-secondary-font);
}

.--box.tertiary {
  background-color: var(--color-tertiary);
  color: var(--color-tertiary-font);
}

.--box.state.border {
  border: 1px solid currentColor;
}

.--box.state-error, .--box.state-danger {
  background-color: var(--color-state-danger);
  color: var(--color-state-danger-font);
}

.--box.state-warning {
  background-color: var(--color-state-warning);
  color: var(--color-state-warning-font);
}

.--box.state-success {
  background-color: var(--color-state-success);
  color: var(--color-state-success-font);
}

.--box.state-info {
  background-color: var(--color-state-info);
  color: var(--color-state-info-font);
}

.--box.alert {
  padding: 24px;
  margin-bottom: 32px;
}

.--box.alert h2 {
  font-size: 1.4rem;
  margin-bottom: 8px;
}

.--box.alert .button {
  color: currentColor;
}

.--box.alert svg {
  fill: currentColor;
}

.--box hr {
  margin: 0;
  border: 0;
  border-top: 1px solid var(--color-background-border);
}

.--box--menu {
  padding: 12px 24px;
  margin: 4px 0;
}

.--box--menu a {
  color: currentColor;
}

.--box--menu a > div {
  display: flex;
  align-items: center;
}

.--box--menu a > div svg:first-child {
  width: 20px;
  margin-right: 8px;
}

.--box--menu a > div svg {
  fill: currentColor;
  flex: 0 0 auto;
}

.--box--menu a > div .label {
  flex-grow: 1;
}

.--box--menu a > div .badge {
  font-size: 0.75rem;
}

.--box--menu button {
  overflow: hidden;
  padding: 8px 12px;
  cursor: pointer;
  border: 1px solid var(--color-surface-border);
  background-color: var(--color-surface);
  color: var(--color-surface-font);
  border-radius: 8px;
  width: 100%;
}

.--box--menu button:hover {
  border-color: currentColor !important;
}

.--box--menu.disabled a {
  pointer-events: none;
}

.--box--menu.disabled a div {
  opacity: 0.8;
}

.--box--menu.selected {
  font-weight: 700;
}

.--box--menu.primary {
  color: var(--color-primary);
  font-weight: 700;
}

.--options-box {
  display: flex;
}

.--options-box input {
  position: absolute;
  top: 12px;
  right: 20px;
  z-index: 100;
}

.--options-box input:checked + .--box {
  border-color: currentColor;
}

.--options-box--item {
  padding: 8px 16px;
  position: relative;
}

.--options-box--item .--box {
  cursor: pointer;
}

.--options-box--radio {
  width: 12px;
  height: 12px;
  border-radius: 12px;
  border: 1px solid currentColor;
  position: absolute;
}

.--options-box.float .--options-box--item .--box:hover {
  box-shadow: 0 24px 30px 0px var(--color-background-shadow);
}

.--options-box.compact .--options-box--item {
  padding: 0 2px 0 0;
}

.--options-box.compact .--options-box--item .--box {
  border-radius: 0;
  box-shadow: none;
}

.--options-box.compact .--options-box--item:first-child .--box {
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
}

.--options-box.compact .--options-box--item:first-child .--box.square {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.--options-box.compact .--options-box--item:last-child .--box {
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
}

.--options-box.compact .--options-box--item:last-child .--box.square {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.--options-box.compact .--options-box--item .--box {
  box-shadow: 0 12px 30px -12px var(--color-background-shadow);
}

.--options-box.compact .--options-box--item .--box:hover {
  box-shadow: 0 24px 30px -12px var(--color-background-shadow);
}

.--pop-box {
  position: relative;
  outline: none;
}

.--pop-box.right .--pop-box--content {
  left: unset;
  right: 0;
}

.--pop-box.top .--pop-box--content {
  top: unset;
  bottom: 100%;
}

.--pop-box--btn {
  cursor: pointer;
}

.--pop-box--content {
  z-index: 1000;
  display: none;
  position: absolute;
  left: 0;
  right: unset;
  top: 100%;
  bottom: unset;
}

.--pop-box > .--pop-box--content:hover {
  display: block;
}

.--pop-box:focus .--pop-box--content {
  display: block;
}

.--table {
  background-color: var(--color-surface);
  color: var(--color-surface-font);
  border: 1px solid var(--color-surface-border);
  overflow: hidden;
  border-spacing: 0;
}

.--table.round {
  border-radius: 24px;
}

.--table.square {
  border-radius: 8px;
}

.--table.no-border {
  border: 0 !important;
}

.--table.back,
.--table > thead.back th {
  background-color: var(--color-background);
  color: var(--color-background-font);
}

.--table.back {
  border: 1px solid var(--color-background-border);
}

.--table.primary,
.--table > thead.primary th {
  background-color: var(--color-primary);
  color: var(--color-primary-font);
}

.--table.secondary,
.--table > thead.secondary th {
  background-color: var(--color-secondary);
  color: var(--color-secondary-font);
}

.--table > tbody.lines td {
  border-bottom: 1px solid var(--color-surface-border);
}

.--table > thead th {
  border-bottom: 1px solid var(--color-surface-border);
  padding: 16px;
  text-align: left;
}

.--table > tbody td {
  padding: 16px;
}

.--tabs {
  background-color: var(--color-surface);
  color: var(--color-surface-font);
  border: 1px solid var(--color-surface-border);
  overflow: hidden;
}

.--tabs.round {
  border-radius: 24px;
}

.--tabs.square {
  border-radius: 8px;
}

.--tabs.back {
  background-color: var(--color-background);
  color: var(--color-background-font);
  border: 1px solid var(--color-background-border);
}

.--tabs.primary {
  background-color: var(--color-primary);
  color: var(--color-primary-font);
}

.--tabs.secondary {
  background-color: var(--color-secondary);
  color: var(--color-secondary-font);
}

.--tabs--header {
  display: flex;
  border-bottom: 1px solid var(--color-surface-border);
  overflow-x: auto;
}

.--tabs--header label {
  border-bottom: 0 solid var(--color-surface-border);
  padding: 16px 32px;
  cursor: pointer;
  text-align: center;
}

.--tabs--content > div {
  display: none;
}

.--tabs > input {
  display: none;
}

.--tabs > input:checked:nth-of-type(1) ~ .--tabs--header label:nth-of-type(1),
.--tabs > input:checked:nth-of-type(2) ~ .--tabs--header label:nth-of-type(2),
.--tabs > input:checked:nth-of-type(3) ~ .--tabs--header label:nth-of-type(3),
.--tabs > input:checked:nth-of-type(4) ~ .--tabs--header label:nth-of-type(4),
.--tabs > input:checked:nth-of-type(5) ~ .--tabs--header label:nth-of-type(5),
.--tabs > input:checked:nth-of-type(6) ~ .--tabs--header label:nth-of-type(6) {
  border-width: 3px;
  font-weight: 700;
  border-color: currentColor;
}

.--tabs > input:checked:nth-of-type(1) ~ .--tabs--content > div:nth-of-type(1),
.--tabs > input:checked:nth-of-type(2) ~ .--tabs--content > div:nth-of-type(2),
.--tabs > input:checked:nth-of-type(3) ~ .--tabs--content > div:nth-of-type(3),
.--tabs > input:checked:nth-of-type(4) ~ .--tabs--content > div:nth-of-type(4),
.--tabs > input:checked:nth-of-type(5) ~ .--tabs--content > div:nth-of-type(5),
.--tabs > input:checked:nth-of-type(6) ~ .--tabs--content > div:nth-of-type(6) {
  display: block;
}

.--form h2 {
  font-size: 1.2em;
  margin-bottom: 16px;
  font-weight: 900;
}

.--form--section {
  margin: 0 -8px;
  display: flex;
  flex-wrap: wrap;
}

.--form--break {
  flex-basis: 100%;
  height: 0;
}

.--form--row {
  display: inline-block;
  padding: 8px;
  flex: 1 1 auto;
}

.--form--row.full {
  flex-basis: 100%;
}

.--form--row--input label, .--form--row.input label {
  display: block;
  margin-bottom: 6px;
  font-weight: 700;
  opacity: 0.8;
}

.--form--row--input select,
.--form--row--input textarea,
.--form--row--input input[type=text],
.--form--row--input input[type=number],
.--form--row--input input[type=email],
.--form--row--input input[type=tel],
.--form--row--input input[type=password],
.--form--row--input .form-control, .--form--row.input select,
.--form--row.input textarea,
.--form--row.input input[type=text],
.--form--row.input input[type=number],
.--form--row.input input[type=email],
.--form--row.input input[type=tel],
.--form--row.input input[type=password],
.--form--row.input .form-control {
  width: 100%;
  background-color: var(--color-form);
  color: var(--color-form-font);
  border: 1px solid var(--color-form-border);
  padding: 8px 12px;
  border-radius: 8px;
}

.--form--row--input select:focus,
.--form--row--input textarea:focus,
.--form--row--input input[type=text]:focus,
.--form--row--input input[type=number]:focus,
.--form--row--input input[type=email]:focus,
.--form--row--input input[type=tel]:focus,
.--form--row--input input[type=password]:focus,
.--form--row--input .form-control:focus, .--form--row.input select:focus,
.--form--row.input textarea:focus,
.--form--row.input input[type=text]:focus,
.--form--row.input input[type=number]:focus,
.--form--row.input input[type=email]:focus,
.--form--row.input input[type=tel]:focus,
.--form--row.input input[type=password]:focus,
.--form--row.input .form-control:focus {
  outline: 2px solid transparent;
  border-color: var(--color-primary);
}

.--form--row--input select:disabled,
.--form--row--input textarea:disabled,
.--form--row--input input[type=text]:disabled,
.--form--row--input input[type=number]:disabled,
.--form--row--input input[type=email]:disabled,
.--form--row--input input[type=tel]:disabled,
.--form--row--input input[type=password]:disabled,
.--form--row--input .form-control:disabled, .--form--row.input select:disabled,
.--form--row.input textarea:disabled,
.--form--row.input input[type=text]:disabled,
.--form--row.input input[type=number]:disabled,
.--form--row.input input[type=email]:disabled,
.--form--row.input input[type=tel]:disabled,
.--form--row.input input[type=password]:disabled,
.--form--row.input .form-control:disabled {
  opacity: 0.8;
  background-color: var(--color-form-border);
}

.--form--row--input textarea, .--form--row.input textarea {
  resize: vertical;
}

.--form--row--description {
  margin: 8px 4px;
  font-size: 0.9em;
  opacity: 0.9;
}

.--form--row.submit input {
  appearance: none;
}

.--form--row.submit input:disabled {
  opacity: 0.7;
}

.--form--row.submit input:disabled:hover {
  border: 1px solid transparent !important;
}

.--form--combo {
  display: flex;
  align-items: stretch;
}

.--form--combo input:first-child {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.--form--combo input:last-child {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-left-color: transparent;
  padding: 6px !important;
  width: 100%;
  font-size: 0.875em;
}

.--progress {
  height: 16px;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--color-secondary);
}

.--progress > .--progress--bar {
  height: 100%;
  background-color: var(--color-primary);
}

.--progress.red > .--progress--bar {
  background-color: var(--color-red);
}

.--progress.yellow > .--progress--bar {
  background-color: var(--color-yellow);
}

.--progress.green > .--progress--bar {
  background-color: var(--color-green);
}

.--progress.blue > .--progress--bar {
  background-color: var(--color-blue);
}

.--tooltip {
  position: relative;
}

.--tooltip.red:after {
  background: var(--color-state-danger);
  color: var(--color-state-danger-font);
}

.--tooltip.red:before {
  border-top: solid 8px var(--color-state-danger);
}

.--tooltip.yellow:after {
  background: var(--color-state-warning);
  color: var(--color-state-warning-font);
}

.--tooltip.yellow:before {
  border-top: solid 8px var(--color-state-warning);
}

.--tooltip.green:after {
  background: var(--color-state-success);
  color: var(--color-state-success-font);
}

.--tooltip.green:before {
  border-top: solid 8px var(--color-state-success);
}

.--tooltip.blue:after {
  background: var(--color-state-info);
  color: var(--color-state-info-font);
}

.--tooltip.blue:before {
  border-top: solid 8px var(--color-state-info);
}

.--tooltip:after {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  content: attr(data-tooltip);
  padding: 6px 10px;
  top: -0.25rem;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  background: var(--color-secondary);
  color: var(--color-secondary-font);
  white-space: pre-wrap;
  z-index: 2;
  border-radius: 4px;
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  font-size: 0.75rem;
  line-height: 1.4;
  width: 150px;
  text-align: center;
}

.--tooltip:before {
  content: "";
  width: 0;
  height: 0;
  border-left: solid 8px transparent;
  border-right: solid 8px transparent;
  border-top: solid 8px var(--color-secondary);
  opacity: 0;
  visibility: hidden;
  position: absolute;
  transform: translateX(-50%) translateY(-70%);
  top: 0;
  left: 50%;
  transition: opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1), transform 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
  z-index: 999;
}

.--tooltip:hover:after {
  display: block;
  opacity: 1;
  visibility: visible;
}

.--tooltip:hover:before {
  display: block;
  opacity: 1;
  visibility: visible;
}

@media (max-width: 1024px) {
  .--tooltip:after {
    transform: translateX(-80%) translateY(-100%);
  }
}

html .--theme--light-only {
  display: inline-block;
}

html .--theme--dark-only {
  display: none;
}

html.dark .--theme--light-only {
  display: none;
}

html.dark .--theme--dark-only {
  display: inline-block;
}

.--scroll-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.--scroll-hide::-webkit-scrollbar {
  display: none;
}

.w-hidden {
  display: none;
}

.modal-open {
  overflow: hidden;
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}

.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}

@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}

.modal.show .modal-dialog {
  transform: none;
}

.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  display: flex;
  max-height: calc(100% - 1rem);
}

.modal-dialog-scrollable .modal-content {
  max-height: calc(100vh - 1rem);
  overflow: hidden;
}

.modal-dialog-scrollable .modal-header,
.modal-dialog-scrollable .modal-footer {
  flex-shrink: 0;
}

.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - 1rem);
  height: min-content;
  content: "";
}

.modal-dialog-centered.modal-dialog-scrollable {
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.modal-dialog-centered.modal-dialog-scrollable .modal-content {
  max-height: none;
}

.modal-dialog-centered.modal-dialog-scrollable::before {
  content: none;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}

.modal-backdrop.fade {
  opacity: 0;
}

.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1rem;
}

.modal-header .close {
  padding: 1rem 1rem;
  margin: -1rem -1rem -1rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
}

.modal-footer > * {
  margin: 0.25rem;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }
  .modal-dialog-scrollable {
    max-height: calc(100% - 3.5rem);
  }
  .modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 3.5rem);
  }
  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }
  .modal-dialog-centered::before {
    height: calc(100vh - 3.5rem);
    height: min-content;
  }
  .modal-sm {
    max-width: 300px;
  }
}

@media (min-width: 992px) {
  .modal-lg,
  .modal-xl {
    max-width: 800px;
  }
}

@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}

.--panel {
  border-left-width: 9px !important;
  padding: 12px 0;
}

.--panel--header {
  display: flex;
  align-items: center;
  padding: 12px 24px;
}

.--panel--header h2 {
  flex: 1 1 auto;
  font-size: 1.3rem;
  padding-right: 8px;
}

.--panel--header a {
  flex: 0 0 auto;
}

.--panel--body {
  padding: 12px 24px;
}

.--panel--body--list > div {
  padding: 8px 0;
}

.--panel--body--list a {
  color: currentColor;
}

.--panel--body--list .text-domain {
  display: none;
}

.--panel--body--list .float-right {
  margin-left: 8px;
  font-size: 0.85em;
}

.--panel--body--list .label-error, .--panel--body--list .label-danger {
  color: var(--color-red);
}

.--panel--body--list .label-warning {
  color: var(--color-yellow);
}

.--panel--body--list .label-success {
  color: var(--color-green);
}

.--panel--body--list .label-info {
  color: var(--color-blue);
}

.--panel--footer {
  padding: 12px 24px;
}

.--panel.panel-color-gold {
  border-left-color: #f0ad4e;
}

.--panel.panel-color-green {
  border-left-color: #5cb85c;
}

.--panel.panel-color-red {
  border-left-color: #d9534f;
}

.--panel.panel-color-blue {
  border-left-color: #5bc0de;
}

.--panel.panel-color-orange {
  border-left-color: #ff6600;
}

.--panel.panel-color-pink {
  border-left-color: #e671b8;
}

.--panel.panel-color-purple {
  border-left-color: #7b4f9d;
}

.--panel.panel-color-lime {
  border-left-color: #8cbf26;
}

.--panel.panel-color-magenta {
  border-left-color: #ff0097;
}

.--panel.panel-color-teal {
  border-left-color: #00aba9;
}

.--panel.panel-color-turquoise {
  border-left-color: #1abc9c;
}

.--panel.panel-color-emerald {
  border-left-color: #2ecc71;
}

.--panel.panel-color-amethyst {
  border-left-color: #9b59b6;
}

.--panel.panel-color-wet-asphalt {
  border-left-color: #004258;
}

.--panel.panel-color-midnight-blue {
  border-left-color: #2c3e50;
}

.--panel.panel-color-sun-flower {
  border-left-color: #f1c40f;
}

.--panel.panel-color-pomegranate {
  border-left-color: #c0392b;
}

.--panel.panel-color-silver {
  border-left-color: #bdc3c7;
}

.--panel.panel-color-asbestos {
  border-left-color: #7f8c8d;
}

html {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6, p, blockquote {
  margin: 0;
  padding: 0;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html {
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  height: 100%;
  background-color: var(--color-background);
  color: var(--color-background-font);
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: transparent;
}

body .-dark-only {
  display: none;
}

body .-light-only {
  display: initial;
}

body.dark .-dark-only {
  display: initial;
}

body.dark .-light-only {
  display: none;
}

body, button, input, select, textarea {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: inherit;
}

code, pre {
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
  font-family: monospace;
}

a {
  text-decoration: none;
  color: var(--color-primary);
}

a.disabled {
  pointer-events: none;
  color: var(--color-silver);
}

a:hover {
  text-decoration: none;
}

iframe {
  border: 0;
}

fieldset {
  border: none;
}

h1 {
  font-size: 2em;
  font-weight: 900;
}

h2 {
  font-size: 1.5em;
  font-weight: 700;
}

select {
  background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px;
  appearance: none;
  padding-right: 26px !important;
}

.-struct {
  height: 100%;
  width: 100%;
  display: flex;
}

.-struct--menu {
  flex: 0 0 188px;
  background-color: var(--color-surface);
  color: var(--color-surface-font);
  z-index: 1000;
}

.-struct--content {
  flex: 1 1 800px;
  background-color: var(--color-background);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 32px 5%;
}

.-struct--content--body {
  max-width: 1140px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .-struct--menu {
    background-color: unset;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    max-height: 80px;
  }
}

.-menu {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.-menu--header {
  flex: 0 0 auto;
  margin: 32px 0;
  text-align: center;
}

.-menu--header img {
  width: 100px;
}

.-menu--items {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}

.-menu--items > div {
  padding: 24px 0;
}

.-menu--footer {
  flex: 0 0 auto;
  padding: 12px 0;
  border-top: 1px solid var(--color-secondary);
  font-size: 0.875em;
}

.-menu--footer a {
  color: currentColor;
}

.-menu--footer > div {
  margin: 16px 24px;
}

.-menu--footer svg {
  fill: currentColor;
}

.-menu--lang .--pop-box--btn {
  display: flex;
  align-items: center;
}

.-menu--lang .--pop-box--btn svg:first-child {
  width: 20px;
  margin-right: 6px;
}

.-menu--lang .--pop-box--btn svg:last-child {
  width: 16px;
  margin-right: 6px;
  padding-top: 4px;
}

.-menu--lang .--pop-box--content {
  margin: 12px 0 8px 0;
}

.-menu--lang .--pop-box--content > .--box {
  width: 282px;
  height: 290px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 0px 21px 5px var(--color-surface-shadow);
}

.-menu--lang .--pop-box--content > .--box .--box--menu {
  padding: 8px 24px;
  flex: 0 0 50%;
}

.-menu--lang .--pop-box--content > .--more {
  position: absolute;
  bottom: 0;
  right: 4px;
  pointer-events: none;
  z-index: 100;
}

.-menu--lang .--pop-box--content > .--more svg {
  opacity: 0.3;
  width: 20px;
  height: 20px;
}

.-menu--lang .--pop-box--content .--more-fill {
  background: var(--color-secondary);
  width: 100%;
  flex: 1 1 auto;
  z-index: 101;
  height: 16px;
}

.-menu--item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.-menu--item--icon {
  width: 56px;
  height: 56px;
  background-color: var(--color-secondary);
  color: var(--color-secondary-font);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  transition: transform 300ms;
}

.-menu--item--icon > svg {
  width: 28px;
  height: auto;
  fill: var(--color-secondary-font);
}

.-menu--item--title {
  margin-top: 10px;
  text-align: center;
  font-weight: 700;
  font-size: 0.875em;
  color: var(--color-surface-font);
}

.-menu--item.active .-menu--item--icon {
  background-color: var(--color-primary);
  box-shadow: 0 6px 12px 0 var(--color-primary-shadow);
}

.-menu--item.active .-menu--item--icon > svg {
  fill: var(--color-primary-font);
}

.-menu--item.active .-menu--item--title {
  color: var(--color-primary);
}

.-menu--item:hover .-menu--item--icon {
  transform: scale(1.08);
}

@media (max-width: 768px) {
  .-menu {
    background-color: var(--color-surface);
    box-shadow: 0 0 12px 0 var(--color-surface-shadow);
    margin-right: 100px;
    border-top-right-radius: 13px;
    border-top: 1px solid var(--color-surface-border);
    border-right: 1px solid var(--color-surface-border);
  }
  .-menu--header, .-menu--footer {
    display: none;
  }
  .-menu--items {
    flex-direction: row;
    justify-content: space-around;
  }
  .-menu--items > div {
    padding: 16px 0;
  }
  .-menu--item--icon {
    width: 48px;
    height: 48px;
  }
  .-menu--item--icon > svg {
    width: 24px;
  }
  .-menu--item--title {
    display: none;
  }
}

.-content {
  display: flex;
  width: 100%;
}

.-content--main {
  flex: 0 1 68%;
  padding-right: 32px;
  overflow: hidden;
}

.-content--aside {
  flex: 0 1 30%;
  position: relative;
}

.-content--aside > div {
  margin-bottom: 32px;
}

.-content--full {
  width: 100%;
}

@media (max-width: 768px) {
  .-content {
    flex-direction: column-reverse;
    margin-bottom: 80px;
  }
  .-content--main {
    padding-right: 0;
  }
}

.-header {
  max-width: 1140px;
  margin: 0 auto 56px;
  display: flex;
  align-items: flex-start;
}

.-header--title {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
}

.-header--title p {
  opacity: 0.8;
  margin-top: 8px;
}

.-header--title--main {
  flex: 1 1 auto;
}

.-header--title--main--back {
  display: inline-flex;
  align-items: center;
  margin-left: -5px;
}

.-header--title--main--back svg {
  fill: currentColor;
}

.-header--title--submenu-placeholder {
  display: none;
  flex: 0 0 60px;
}

.-header--nav {
  flex: 0 0 auto;
}

.-header--nav--menu {
  display: flex;
  align-items: flex-start;
}

.-header--nav--menu a {
  color: currentColor;
}

.-header--nav--menu svg {
  fill: currentColor;
}

.-header--nav--menu--logo {
  display: none;
  flex: 1 1 auto;
}

.-header--nav--menu--logo img {
  width: 100px;
}

.-header--nav--menu--lang {
  margin: 0 12px 0 18px;
}

.-header--nav--menu--cart {
  color: var(--color-primary);
}

.-header--nav--menu--cart .badge {
  font-size: 0.75rem;
  margin-left: -4px;
}

.-header--nav--menu--notification {
  padding: 0 4px;
  font-size: 0.875em;
}

.-header--nav--menu--notification:focus .--pop-box--btn {
  color: var(--color-primary);
}

.-header--nav--menu--notification .--pop-box--btn {
  padding: 12px;
  margin-top: -12px;
}

.-header--nav--menu--notification.active .--pop-box--btn::after {
  content: "";
  background-color: var(--color-primary);
  position: absolute;
  width: 8px;
  height: 8px;
  top: 0;
  right: 12px;
  border-radius: 8px;
}

.-header--nav--menu--notification .--pop-box--content {
  width: 300px;
  left: calc(50% - 300px/2);
}

.-header--nav--menu--notification .--pop-box--content > .--box {
  max-height: 320px;
  overflow-y: scroll;
  box-shadow: 0 0px 21px 5px var(--color-surface-shadow);
}

.-header--nav--menu--notification .--pop-box--content::after {
  content: "";
  background-color: var(--color-surface-border);
  position: absolute;
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  top: -4px;
  left: calc(50% - 8px/2);
  z-index: -1;
}

.-header--nav--menu--user:focus .--pop-box--btn {
  color: var(--color-primary);
}

.-header--nav--menu--user .--pop-box--btn {
  display: flex;
  align-items: center;
}

.-header--nav--menu--user .--pop-box--btn svg:first-child {
  margin-right: 2px;
}

.-header--nav--menu--user .--pop-box--btn svg:last-child {
  width: 16px;
  margin-right: 6px;
  padding-top: 4px;
}

.-header--nav--menu--user .--pop-box--content {
  width: 210px;
  margin-top: 12px;
  margin-right: -2px;
}

.-header--nav--menu--user .--pop-box--content > .--box {
  box-shadow: 0 0px 21px 5px var(--color-surface-shadow);
}

.-header--nav--menu--currency {
  margin: 0 0 0 18px;
  font-size: 0.875em;
}

.-header--nav--menu--currency select {
  padding: 4px 12px;
  width: 75px;
  background-color: var(--color-background);
  color: var(--color-background-font);
}

.-header--nav.notlogged {
  width: 100%;
}

.-header--nav.notlogged .-header--nav--menu {
  width: 100%;
}

.-header--nav.notlogged .-header--nav--menu--logo {
  display: block;
}

@media (max-width: 768px) {
  .-header {
    flex-direction: column-reverse;
    margin-bottom: 32px;
  }
  .-header--title {
    width: 100%;
  }
  .-header--title--submenu-placeholder {
    display: block;
  }
  .-header--nav {
    width: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 40px;
  }
  .-header--nav--menu {
    width: 100%;
  }
  .-header--nav--menu--logo {
    display: block;
  }
  .-header--nav--menu--notification .--pop-box--content {
    width: 280px;
    left: unset;
    right: -20px;
  }
  .-header--nav--menu--notification .--pop-box--content::after {
    display: none;
  }
  .-header--nav--menu--lang .--pop-box--btn svg:last-child,
  .-header--nav--menu--lang .--pop-box--btn span {
    display: none;
  }
  .-header--nav--menu--user .--pop-box--btn svg:last-child,
  .-header--nav--menu--user .--pop-box--btn span {
    display: none;
  }
}

.-submenu svg {
  fill: currentColor;
}

.-submenu .--pop-box--btn {
  display: none;
  padding: 8px;
}

.-submenu .--pop-box--btn svg {
  width: 32px;
  height: 32px;
}

.-submenu .--pop-box--content {
  display: block;
  position: relative;
  z-index: 0;
}

@media (max-width: 768px) {
  .-submenu .--pop-box {
    position: absolute;
    right: 0;
    top: -80px;
  }
  .-submenu .--pop-box:focus .--pop-box--btn svg {
    fill: var(--color-primary);
  }
  .-submenu .--pop-box--btn {
    display: block;
  }
  .-submenu .--pop-box--content {
    display: none;
    position: absolute;
    min-width: 200px;
  }
  .-submenu .--pop-box--content .--box {
    box-shadow: 0 0px 21px 5px var(--color-surface-shadow);
  }
}

.-captcha {
  margin: 16px 0;
}

.-captcha p {
  font-size: 0.9em;
}

.-captcha--input {
  display: flex;
  align-items: center;
  margin-top: 12px;
}

.-captcha--input > div:first-child {
  padding-right: 8px;
}

.-util--form p {
  margin: 16px 0;
}

.-util--form .row {
  display: flex;
  align-items: center;
}

.-util--form label {
  display: block;
  margin-bottom: 6px;
  font-weight: 700;
  opacity: 0.8;
}

.-util--form button,
.-util--form input[type=submit],
.-util--form input[type=button] {
  background-color: var(--color-primary);
  color: var(--color-primary-font);
  border: 1px solid var(--color-background-border);
  border-radius: 8px;
  padding: 8px 12px;
  transition: border-color 300ms linear;
  cursor: default;
  margin: 0 16px;
  font-size: 1rem;
  font-weight: 700;
}

.-util--form button:hover,
.-util--form input[type=submit]:hover,
.-util--form input[type=button]:hover {
  border-color: currentColor !important;
}

.-util--form textarea,
.-util--form input[type=text],
.-util--form input[type=email],
.-util--form input[type=password] {
  font-size: 1rem;
  background-color: var(--color-form);
  color: var(--color-form-font);
  border: 1px solid var(--color-form-border);
  padding: 8px 12px;
  border-radius: 8px;
}

.-util--form textarea:focus,
.-util--form input[type=text]:focus,
.-util--form input[type=email]:focus,
.-util--form input[type=password]:focus {
  outline: 2px solid transparent;
  border-color: var(--color-primary);
}

.-util--form textarea:disabled,
.-util--form input[type=text]:disabled,
.-util--form input[type=email]:disabled,
.-util--form input[type=password]:disabled {
  opacity: 0.8;
  background-color: var(--color-form-border);
}

.-util--form textarea {
  resize: vertical;
}

.-anim--pulse {
  animation: anim-pulse 1s infinite linear;
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

@keyframes anim-pulse {
  0% {
    background-color: transparent;
  }
  100% {
    background-color: currentColor;
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}

.-sign--in {
  width: 100%;
  max-width: 426px;
  margin: 0 auto;
}

.-sign--in--options {
  display: flex;
}

.-sign--in--options--remember {
  flex: 1 0 auto;
}

.-sign--in--options--reset {
  flex: 0 1 auto;
  font-size: 0.9em;
  text-align: right;
}

.-sign--up {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.-sign--pass-reset {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.-sign--title {
  margin: 0 8px 32px;
}

.-sign--title p {
  margin-top: 8px;
  opacity: 0.7;
}

.-sign--detail {
  background-color: var(--color-background);
  color: var(--color-background-font);
}

.-sign--twofa {
  width: 100%;
  max-width: 526px;
  margin: 0 auto;
}

.-sign--twofa--form {
  margin: 16px 0;
}

.-sign--twofa--form input[type=text] {
  width: 100%;
}

.-sign--twofa--form button,
.-sign--twofa--form input[type=submit] {
  min-width: 100%;
  margin: 24px 0 0;
}

.-home {
  display: flex;
  width: 100%;
}

.-home--main {
  flex: 0 1 68%;
  padding-right: 32px;
  overflow: hidden;
}

.-home--aside {
  flex: 0 1 30%;
  position: relative;
}

.-home--aside > div {
  margin-bottom: 32px;
}

.-home--full {
  width: 100%;
}

.-home--num {
  display: flex;
  max-width: 800px;
  margin-bottom: 24px;
}

.-home--num > div {
  flex: 1 0 0;
  border: 0 solid var(--color-surface-border);
  position: relative;
}

.-home--num > div .stat {
  font-size: 2em;
  font-weight: 900;
}

.-home--num > div .title {
  font-weight: 700;
  opacity: 0.9;
}

.-home--num > div .icon {
  position: absolute;
  right: 16px;
  top: 16px;
}

.-home--num > div svg {
  width: 60px;
  height: 60px;
  opacity: 0.2;
  fill: currentColor;
}

.-home--num > div a {
  color: currentColor;
  padding: 32px;
  display: inline-block;
  width: 100%;
}

.-home--num > div:not(:last-child) {
  border-right-width: 1px;
}

.-home--panels {
  display: flex;
  margin: 0 -10px;
}

.-home--panels > div {
  flex: 1 1 50%;
  padding: 0 10px;
}

.-home--panels .--panel {
  margin: 20px 0;
}

@media (max-width: 768px) {
  .-home {
    flex-direction: column;
    margin-bottom: 80px;
  }
  .-home--main {
    padding-right: 0;
  }
  .-home--full {
    margin-bottom: 80px;
  }
  .-home--panels {
    display: block;
  }
}

@media (max-width: 643px) {
  .-home--num > div .stat {
    font-size: 1.6em;
  }
  .-home--num > div .icon {
    display: none;
  }
  .-home--num > div a {
    padding: 16px 24px;
  }
}

.-service--list {
  margin-bottom: 32px;
}

.-service--list--main {
  display: flex;
  align-items: center;
  padding: 24px 32px;
  min-height: 92px;
}

.-service--list--main--subtitle {
  font-size: 0.875em;
  opacity: 0.8;
  margin-top: 4px;
}

.-service--list--main--item {
  flex: 1 1 auto;
}

.-service--list--main--item h2 {
  display: flex;
  align-items: center;
}

.-service--list--main--item h2 a {
  display: flex;
  align-items: center;
}

.-service--list--main--item h2 svg {
  margin-left: 8px;
  fill: currentColor;
}

.-service--list--main--item span.loader {
  color: var(--color-primary);
  margin-left: 12px;
}

.-service--list--main--side {
  flex: 0 0 auto;
}

.-service--list--details {
  padding: 8px 32px;
  font-size: 0.875em;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -24px;
  background-color: var(--color-background);
  color: var(--color-background-font);
}

.-service--list--details--item {
  padding: 8px 24px;
}

.-service--list--details--item > label {
  display: inline-block;
  font-weight: 600;
  margin-bottom: 6px;
}

.-service--item {
  margin-bottom: 32px;
  display: flex;
}

.-service--item > div {
  flex: 1 1 50%;
}

.-service--item--main {
  padding: 24px 32px;
  border-right: 1px solid var(--color-surface-border);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.-service--item--main > h2 {
  font-size: 1.7em;
  font-weight: 900;
}

.-service--item--main--subtitle {
  font-size: 0.875em;
  opacity: 0.8;
  margin-top: 4px;
}

.-service--item--details {
  padding: 12px 32px;
}

.-service--item--details--item {
  padding: 10px 0px;
}

.-service--item--details--item > label {
  display: inline-block;
  font-size: 0.875em;
  font-weight: 700;
  margin-bottom: 6px;
  opacity: 0.8;
}

.-service--item--resourceUsage {
  background-color: var(--color-surface);
}

.-service--item--resourceUsage > div {
  display: flex;
  justify-content: space-evenly;
}

.-service--item--resourceUsage > div > div {
  position: relative;
  padding: 24px;
  text-align: center;
}

.-service--item--resourceUsage > div > div > h4 {
  margin-bottom: 16px;
}

.-service--item--resourceUsage > div > div > p {
  margin-top: 16px;
}

.-service--item--resourceUsage > p {
  padding: 24px;
}

@media (max-width: 968px) {
  .-service--item {
    flex-direction: column;
  }
  .-service--item--main {
    border-right: 0;
    border-bottom: 1px solid var(--color-surface-border);
  }
  .-service--item--details {
    display: flex;
    flex-wrap: wrap;
  }
  .-service--item--details--item {
    flex: 1 1 50%;
  }
}

.-service--icon {
  display: flex;
  align-items: center;
}

.-service--icon > svg {
  width: 12px;
  fill: currentColor;
  margin-right: 4px;
}

.-service--status-active.tag, .-service--status-completed.tag {
  background-color: var(--color-state-success);
  color: var(--color-state-success-font);
}

.-service--status-active svg, .-service--status-completed svg {
  fill: var(--color-green);
}

.-service--status-suspended.tag {
  background-color: var(--color-state-warning);
  color: var(--color-state-warning-font);
}

.-service--status-suspended svg {
  fill: var(--color-yellow);
}

.-service--status-pending.tag {
  background-color: var(--color-state-danger);
  color: var(--color-state-danger-font);
}

.-service--status-pending svg {
  fill: var(--color-red);
}

.-service--status-terminated.tag, .-service--status-cancelled.tag {
  border: 1px solid currentColor;
  background-color: transparent;
  opacity: 0.7;
}

.-service--status-terminated svg, .-service--status-cancelled svg {
  fill: var(--color-silver);
}

.-service--status-fraud.tag {
  border: 1px solid currentColor;
  background-color: transparent;
  opacity: 0.8;
}

.-service--status-fraud svg {
  fill: currentColor;
}

.-service--upgrade section {
  margin-bottom: 20px;
}

.-service--upgrade p {
  line-height: 1.3;
}

.-service--upgrade--label {
  margin-bottom: 6px;
  font-weight: 700;
  opacity: 0.8;
}

.-service--upgrade--inputs {
  display: flex;
  flex-wrap: wrap;
  padding: 8px 0;
}

.-service--upgrade--inputs > div {
  flex: 1 0 50%;
  padding: 8px;
  min-width: 200px;
}

.-service--upgrade--btn {
  padding: 24px;
  text-align: right;
}

.-service--upgrade--disclaimer {
  padding: 8px 16px;
}

.-service--upgrade--disclaimer p {
  color: var(--color-state-danger-font);
  line-height: 140%;
}

.-service--upgrade svg {
  fill: currentColor;
}

.-service-module._solusvmpro .row {
  margin-top: 16px;
  margin-bottom: 16px;
}

.-service-module._solusvmpro .row:before,
.-service-module._solusvmpro .row:after {
  display: table;
  content: " ";
}

.-service-module._solusvmpro .row:after {
  clear: both;
}

.-service-module._solusvmpro .col-md-3,
.-service-module._solusvmpro .col-md-9,
.-service-module._solusvmpro .col-md-10,
.-service-module._solusvmpro .col-md-12,
.-service-module._solusvmpro .col-xs-2,
.-service-module._solusvmpro .col-xs-8 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.-service-module._solusvmpro .col-xs-2,
.-service-module._solusvmpro .col-xs-8 {
  float: left;
}

.-service-module._solusvmpro .col-xs-2 {
  width: 16.66666667%;
}

.-service-module._solusvmpro .col-xs-8 {
  width: 66.66666667%;
}

@media (min-width: 992px) {
  .-service-module._solusvmpro .col-md-3,
  .-service-module._solusvmpro .col-md-9,
  .-service-module._solusvmpro .col-md-10,
  .-service-module._solusvmpro .col-md-12 {
    float: left;
  }
  .-service-module._solusvmpro .col-md-12 {
    width: 100%;
  }
  .-service-module._solusvmpro .col-md-10 {
    width: 83.33333333%;
  }
  .-service-module._solusvmpro .col-md-9 {
    width: 75%;
  }
  .-service-module._solusvmpro .col-md-3 {
    width: 25%;
  }
}

.-service-module._solusvmpro .progress {
  height: 20px;
  margin-top: 12px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.-service-module._solusvmpro .progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #337ab7;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  transition: width 0.6s ease;
}

.-service-module._solusvmpro .progress.active .progress-bar {
  animation: progress-bar-stripes 2s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .-service-module._solusvmpro .progress-bar {
    transition: none;
  }
}

.-service-module._solusvmpro .hide {
  display: none !important;
}

.-service-module._solusvmpro .show {
  display: block !important;
}

.-service-module._solusvmpro .collapse {
  display: none;
}

.-service-module._solusvmpro .collapse.in {
  display: block;
}

.-service-module._solusvmpro .panel {
  margin-bottom: 20px;
  background-color: var(--color-background);
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.-service-module._solusvmpro .panel-body {
  padding: 16px;
}

.-service-module._solusvmpro .panel-body:before,
.-service-module._solusvmpro .panel-body:after {
  display: table;
  content: " ";
}

.-service-module._solusvmpro .panel-body:after {
  clear: both;
}

.-service-module._solusvmpro .panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-radius: 8px;
}

.-service-module._solusvmpro .panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}

.-service-module._solusvmpro .panel-title {
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
}

.-service-module._solusvmpro .panel-title > a,
.-service-module._solusvmpro .panel-title > small,
.-service-module._solusvmpro .panel-title > .small,
.-service-module._solusvmpro .panel-title > small > a,
.-service-module._solusvmpro .panel-title > .small > a {
  color: inherit;
}

.-service-module._solusvmpro .panel-group {
  margin-bottom: 20px;
}

.-service-module._solusvmpro .panel-group .panel {
  margin-bottom: 0;
  border-radius: 8px;
}

.-service-module._solusvmpro .panel-group .panel + .panel {
  margin-top: 5px;
}

.-service-module._solusvmpro .panel-group .panel-heading {
  border-bottom: 0;
}

.-service-module._solusvmpro .panel-group .panel-heading + .panel-collapse > .panel-body {
  border-top: 1px solid var(--color-surface-border);
}

.-service-module._solusvmpro .panel-group .panel-footer {
  border-top: 0;
}

.-service-module._solusvmpro .panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid var(--color-surface-border);
}

.-service-module._solusvmpro .panel-default {
  border-color: var(--color-surface-border);
}

.-service-module._solusvmpro .panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: var(--color-surface-border);
}

.-service-module._solusvmpro .panel-default > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: var(--color-surface-border);
}

.-service-module._solusvmpro .btn {
  border: 1px solid var(--color-background-border);
  border-radius: 8px;
  padding: 8px 12px;
  transition: border-color 300ms linear;
  cursor: default;
  margin-top: 8px;
  margin-right: 8px;
  font-size: 1rem;
  font-weight: 700;
}

.-service-module._solusvmpro .btn:hover {
  border-color: currentColor !important;
}

.-service-module._solusvmpro .btn.btn-default {
  background-color: var(--color-surface-border);
  color: var(--color-secondary-font);
}

.-service-module._solusvmpro .btn.btn-action, .-service-module._solusvmpro .btn.btn-warning, .-service-module._solusvmpro .btn.btn-success {
  background-color: var(--color-primary);
  color: var(--color-primary-font);
}

.-service-module._solusvmpro .modal-content {
  background-color: var(--color-secondary);
  color: var(--color-secondary-font);
  border: 1px solid var(--color-surface-border);
  box-shadow: 0 12px 30px -7px var(--color-surface-shadow);
  border-radius: 8px;
}

.-service-module._solusvmpro .modal-header {
  flex-direction: row-reverse;
}

.-service-module._solusvmpro .modal-header .close {
  border: 0;
  background: transparent;
  color: currentColor;
}

.-service-module._OpenStackVPS > div {
  padding: 24px 16px;
}

.-service-module._OpenStackVPS h2 {
  margin-bottom: 24px;
}

.-service-module._OpenStackVPS h3 {
  margin-bottom: 16px;
}

.-service-module._OpenStackVPS button.close {
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: 0;
  appearance: none;
  line-height: 0.6;
}

.-service-module._OpenStackVPS .close {
  float: right;
  font-size: 21px;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .2;
}

.-service-module._OpenStackVPS .hidden {
  display: none !important;
}

.-service-module._OpenStackVPS table {
  border: 1px solid var(--color-surface-border);
  width: 100%;
  border-radius: 8px;
  border-spacing: 0;
  overflow: hidden;
  margin-bottom: 24px;
}

.-service-module._OpenStackVPS table th, .-service-module._OpenStackVPS table td {
  padding: 12px;
}

.-service-module._OpenStackVPS table th, .-service-module._OpenStackVPS table tr:not(:last-child) td {
  border-bottom: 1px solid var(--color-surface-border);
}

.-service-module._OpenStackVPS table tbody {
  background-color: var(--color-background);
}

.-service-module._OpenStackVPS .btn {
  border: 1px solid var(--color-background-border);
  border-radius: 8px;
  padding: 8px 12px;
  transition: border-color 300ms linear;
  cursor: pointer;
  margin-top: 8px;
  margin-right: 8px;
  font-size: 1rem;
  font-weight: 700;
  background: var(--color-surface-border);
  color: var(--color-secondary-font);
}

.-service-module._OpenStackVPS .btn:hover {
  border-color: currentColor !important;
}

.-service-module._OpenStackVPS .modal-content {
  background-color: var(--color-surface);
  color: var(--color-surface-font);
  border-radius: 8px;
}

.-service-module._OpenStackVPS .modal-header {
  display: block;
}

.-service-module._OpenStackVPS .modal-header button.close {
  padding: 12px;
}

.-service-module._OpenStackVPS .rebuild > a.btn-small {
  display: none;
}

.-service-module._OpenStackVPS .firewall > a.btn-small {
  display: none;
}

.-billing {
  width: 100%;
  overflow-x: scroll;
}

.-billing--table {
  width: 100%;
}

.-billing--table > tbody .-billing--table--details {
  padding: 4px;
}

.-billing--table--details a {
  color: currentColor;
}

.-billing--table--details svg {
  fill: currentColor;
}

.-billing--table--details.center {
  text-align: center;
}

.-billing--table--details a {
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}

.-billing--table .--box.tag {
  white-space: nowrap;
}

.-billing--status-paid, .-billing--status-accepted {
  background-color: var(--color-state-success);
  color: var(--color-state-success-font);
}

.-billing--status-payment-pending, .-billing--status-refunded {
  background-color: var(--color-state-warning);
  color: var(--color-state-warning-font);
}

.-billing--status-unpaid {
  background-color: var(--color-state-danger);
  color: var(--color-state-danger-font);
}

.-billing--status-cancelled, .-billing--status-collections, .-billing--status-delivered, .-billing--status-on-hold {
  background-color: var(--color-state-info);
  color: var(--color-state-info-font);
}

.-billing--status-draft, .-billing--status-lost, .-billing--status-dead {
  border: 1px solid currentColor;
}

.-admin--gen-password {
  margin: 16px 0;
  display: flex;
  align-items: center;
}

.-admin--gen-password > div {
  padding: 8px;
  flex: 1 1 auto;
}

.-admin--gen-password > span {
  font-size: 0.875em;
  padding: 8px;
}

.-admin--tip {
  padding: 16px 24px;
  opacity: 0.9;
}

.-admin--tip p:first-child {
  font-weight: 700;
  margin-bottom: 8px;
}

.-admin--server-status .--title {
  padding: 12px 24px;
  display: flex;
  align-items: center;
}

.-admin--server-status .--title span:first-child {
  flex: 1 1 auto;
}

.-admin--server-status .--title span:last-child {
  flex: 0 0 auto;
}

.-admin--server-status .--body {
  padding: 12px 24px;
  line-height: 1.6;
}

.-admin--server-status .--nav {
  margin: 24px 0;
}

.-admin--server-status .--nav a {
  display: inline-block;
  padding: 8px 24px;
  margin-right: 8px;
}

.-admin--server-status .--nav a.disabled {
  pointer-events: none;
}

.-admin--server-status .--server-table {
  overflow-x: scroll;
  width: 100%;
}

.-admin--server-status .--server-table > table {
  width: 100%;
  margin: 24px 0;
}

.-affiliate h2 {
  margin-bottom: 16px;
}

.-affiliate--toplinks {
  flex: 1 1 auto;
  align-items: center;
  margin: -16px -16px 32px;
}

.-affiliate--toplinks > a {
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 8px 0px;
  color: var(--color-background-font);
  text-align: center;
  margin: 8px 16px;
  border-bottom: 1px solid var(--color-surface-border);
  opacity: 0.8;
}

.-affiliate--toplinks > a.selected {
  display: inline-block;
  border-bottom: 4px solid var(--color-primary);
  opacity: 1;
}

.-affiliate--call {
  padding: 24px;
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
  line-height: 1.4;
}

.-affiliate--main {
  margin-bottom: 48px;
}

.-affiliate--main--stats {
  display: flex;
  width: 100%;
}

.-affiliate--main--stats > div {
  flex: 0 0 33%;
  padding: 32px;
  border: 0 solid var(--color-surface-border);
}

.-affiliate--main--stats > div p:first-child {
  font-size: 2em;
  font-weight: 900;
}

.-affiliate--main--stats > div p:last-child {
  font-weight: 700;
  opacity: 0.9;
}

.-affiliate--main--stats > div:nth-child(2) {
  border-right-width: 1px;
  border-left-width: 1px;
}

.-affiliate--main--link {
  padding: 24px 32px;
}

.-affiliate--main--link > label {
  margin-bottom: 6px;
}

.-affiliate--main--link > div {
  margin-top: 12px;
  display: flex;
  align-items: center;
}

.-affiliate--main--link > div > p {
  font-size: 1.3em;
  font-weight: 700;
}

.-affiliate--main--link > div > span.--tooltip {
  margin: 0 4px;
  padding: 6px;
  cursor: pointer;
}

.-affiliate--main--link > div svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

@media (max-width: 960px) {
  .-affiliate--main--stats > div {
    padding: 24px 4px;
    text-align: center;
  }
  .-affiliate--main--stats > div p:first-child {
    font-size: 1.7em;
    font-weight: 900;
  }
  .-affiliate--main--stats > div p:last-child {
    font-size: 0.875em;
  }
}

.-affiliate--mkt {
  margin-bottom: 48px;
}

.-affiliate--mkt--items {
  padding: 8px 0;
}

.-affiliate--mkt--items > div {
  padding: 8px;
}

.-affiliate--mkt--items > div > div {
  width: 100%;
  height: 100%;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
}

.-affiliate--mkt--items > div > div img {
  flex: 1 1 auto;
  max-width: 180px;
  width: 100%;
  object-fit: contain;
  padding: 12px;
}

.-affiliate--mkt--items > div > div > div {
  flex: 1 1 180px;
  min-width: 160px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.-affiliate--mkt--items > div > div > div h3 {
  margin-bottom: 8px;
}

.-affiliate--mkt--items > div > div > div p {
  margin-bottom: 12px;
}

.-affiliate--mkt--items > div > div > div button {
  margin-top: 4px;
}

.-affiliate--refer {
  margin-bottom: 48px;
}

.-affiliate--refer > div {
  width: 100%;
  overflow: scroll;
}

.-affiliate--refer > div > table {
  width: 100%;
  border: 0;
}

.-affiliate--linkscode {
  margin-bottom: 48px;
}

.-affiliate--pay--header {
  padding: 24px 32px 12px;
}

.-affiliate--pay--header h2 {
  font-size: 1.3em;
}

.-affiliate--pay--header > .--table {
  width: 100%;
  border: 0;
}

.-affiliate--pay--header > .--table > tbody td {
  padding: 8px 0;
}

.-affiliate--pay--header > .--table > tbody td:first-child {
  padding-right: 4px;
}

.-affiliate--pay--header > .--table > tbody td:nth-child(2) {
  width: 30%;
  font-weight: 700;
  text-align: right;
}

.-affiliate--pay--form--info {
  font-size: 0.875em;
  margin: 6px 0 0;
}

.-account--emails {
  overflow-x: scroll;
}

.-account--emails--date {
  white-space: nowrap;
}

.-account--emails--subject > div {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.-account--emails--subject > div > div:first-child {
  flex: 1 1 0;
  min-width: 165px;
}

.-account--emails--subject > div > div:first-child svg {
  fill: currentColor;
  width: 16px;
  height: 16px;
  transform: rotate(45deg);
}

.-account--emails--subject > div > div:last-child {
  flex: 0 1 auto;
}

.-account--emails--subject > div > div:last-child button {
  white-space: nowrap;
  margin: 8px 0;
  font-size: 0.9em;
}

.-account--pay-methods--options {
  margin: 0 0 24px 0;
}

.-account--pay-methods--options > p {
  margin: 16px 0;
}

.-account--pay-methods--options a {
  display: inline-block;
  margin-right: 8px;
}

.-account--pay-methods--table {
  width: 100%;
  overflow-x: scroll;
}

.-account--pay-methods--table > table {
  width: 100%;
}

.-account--pay-methods--actions {
  display: flex;
}

.-account--pay-methods--actions > a {
  padding: 4px 8px;
  font-size: 0.875em;
  white-space: nowrap;
  margin: 0 4px;
}

.-account--pay-methods--manage--opts {
  margin-top: 8px;
}

.-account--pay-methods--manage--opts label {
  display: inline-block !important;
  white-space: nowrap;
  margin-right: 8px;
  font-size: 0.9em;
}

.-account--pay-methods--manage--opts.border label {
  padding: 8px 12px;
}

.-account--pay-methods--manage .form-group {
  width: 100%;
  padding: 8px;
}

.-account--pay-methods--manage .field-error-msg {
  display: none;
  font-size: 0.85em;
  color: var(--color-red);
}

.-account--pay-methods--manage #stripeElements .col-sm-7 {
  width: 220px;
}

.-account--pay-methods--manage #stripeElements .col-sm-2 {
  width: 80px;
}

.-account--verify-email {
  display: flex;
  align-items: center;
  padding: 12px 24px !important;
}

.-account--verify-email svg {
  fill: currentColor;
}

.-account--verify-email .--body {
  flex: 1 1 auto;
  padding: 0 8px;
}

.-account--verify-email .--body span {
  margin-right: 12px;
}

.-account--verify-email .--body button {
  margin: 8px 0;
}

.-account--user-verify-email {
  padding: 32px 24px;
  margin: 0 auto;
  text-align: center;
  max-width: 460px;
}

.-account--user-verify-email .--btn {
  display: inline-block;
  padding: 12px 24px;
  margin-bottom: 16px;
}

.-profile > form {
  margin-bottom: 32px;
}

.-profile--extra {
  display: none;
  padding: 0 24px;
}

.-profile--extra svg {
  fill: currentColor;
}

.-profile--pass {
  flex: 0 0 50%;
}

.-profile--2factor--status {
  margin: 24px 0;
  line-height: 2;
}

.-profile--2factor--action {
  margin-top: 40px;
  margin-bottom: 16px;
}

.-profile--2factor--warning {
  display: flex;
  margin: 24px 0;
}

.-profile--2factor--warning svg {
  flex: 0 0 auto;
  fill: var(--color-red);
  margin-right: 8px;
}

@media (max-width: 768px) {
  .-profile--extra {
    display: block;
  }
}

@media (max-width: 1046px) {
  .-profile--pass {
    flex-basis: 100%;
  }
}

.-cart--products--cat {
  margin-top: 24px;
  display: flex;
}

.-cart--products--cat--links {
  flex: 1 1 auto;
  align-items: center;
  margin: 0 -16px;
}

.-cart--products--cat--links > a {
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 8px 0px;
  color: var(--color-background-font);
  text-align: center;
  margin: 8px 16px;
  border-bottom: 1px solid var(--color-surface-border);
  opacity: 0.8;
}

.-cart--products--cat--links > a.selected {
  display: inline-block;
  border-bottom: 4px solid var(--color-primary);
  opacity: 1;
}

.-cart--products--cat--lang {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  font-size: 0.875em;
}

.-cart--products--cat--lang select {
  width: 75px;
  background-color: var(--color-background);
  color: var(--color-background-font);
}

.-cart--products--items {
  display: flex;
  margin: 16px -16px;
  flex-wrap: wrap;
}

.-cart--products--items > div {
  margin: 16px;
  flex: 1 0 340px;
  max-width: 400px;
}

.-cart--products--item {
  display: flex;
  flex-direction: column;
}

.-cart--products--item--header {
  padding: 24px;
  flex: 0 0 auto;
}

.-cart--products--item--body {
  padding: 4px 24px 24px;
  flex: 1 1 auto;
}

.-cart--products--item--body ul {
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

.-cart--products--item--body ul li {
  list-style: none;
}

.-cart--products--item--footer {
  background-color: var(--color-background);
  color: var(--color-background-font);
  padding: 12px 24px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.-cart--products--item--footer > div:first-child {
  flex: 1 1 auto;
  font-size: 0.875rem;
}

.-cart--products--item--footer > div:first-child .price {
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 4px;
  display: inline-block;
  color: var(--color-secondary-font);
}

.-cart--products--item--footer > div:last-child {
  flex: 0 0 auto;
  padding-left: 8px;
}

.-cart--config section {
  margin: 48px 0;
}

.-cart--config--header {
  margin-top: 0px !important;
}

.-cart--config--header .--description {
  display: flex;
}

.-cart--config--header .--description .desc--info {
  flex: 1 1 auto;
  min-width: 344px;
}

.-cart--config--header .--description .desc--info ul {
  padding: 0;
}

.-cart--config--header .--description .desc--info ul li {
  list-style: none;
  margin: 12px 0;
}

.-cart--config--header .--description .desc--img {
  flex: 0 1 auto;
  max-width: 440px;
  position: relative;
}

.-cart--config--header .--description .desc--img img {
  max-width: 425px;
  position: relative;
  margin: 90px 0 0 32px;
}

.-cart--config--header .--description .desc--img .back {
  width: 80%;
  height: 70%;
  background: var(--color-secondary);
  position: absolute;
  top: 32px;
  left: 0;
  border-radius: 24px;
}

@media (max-width: 764px) {
  .-cart--config--header .--description {
    flex-direction: column;
  }
}

.-cart--config--pricing .--options-box {
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 -16px;
}

.-cart--config--pricing .--options-box--item,
.-cart--config--pricing .filler {
  flex: 1 0 25%;
  min-width: 200px;
  padding: 8px 16px;
}

.-cart--config--pricing .--options-box--item label input:checked + div {
  border-color: var(--color-primary);
  background-color: var(--color-secondary);
}

.-cart--config--pricing .--options-box--item label input:checked + div .--options-box--radio {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
}

.-cart--config--pricing .--options-box--item label input:checked + div .prc--msg {
  background-color: var(--color-primary);
  color: var(--color-primary-font);
}

.-cart--config--pricing .--options-box--item label > div {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  text-align: center;
}

.-cart--config--pricing .--options-box--item label > div .--options-box--radio {
  top: 6px;
  right: 6px;
}

.-cart--config--pricing .--options-box--item label > div .prc--cycle {
  flex: 0 0 auto;
  padding: 24px 16px 0;
  font-weight: 700;
}

.-cart--config--pricing .--options-box--item label > div .prc--body {
  flex: 1 1 auto;
  padding: 20px 16px 28px;
  display: flex;
  flex-direction: column;
}

.-cart--config--pricing .--options-box--item label > div .prc--body--price {
  font-size: 0.875em;
}

.-cart--config--pricing .--options-box--item label > div .prc--body--price span {
  font-size: 2.2em;
  font-weight: 900;
}

.-cart--config--pricing .--options-box--item label > div .prc--body--total {
  font-size: 0.875em;
  opacity: 0.7;
  margin-top: 8px;
}

.-cart--config--pricing .--options-box--item label > div .prc--msg {
  margin-top: -12px;
  padding: 8px 16px;
  font-size: 0.75em;
  transition: background-color 300ms ease;
}

.-cart--config--pricing .--options-box--item label > div .prc--msg.featured {
  background-color: var(--color-red);
  color: #FFF;
}

@media (max-width: 814px) {
  .-cart--config--pricing .--options-box--item {
    flex-basis: 50%;
  }
}

.-cart--config--metrics ul {
  line-height: 2;
  list-style: none;
  margin: 16px;
  padding: 0;
}

.-cart--config--location .--options-box {
  flex-wrap: wrap;
  margin: 0 -16px;
}

.-cart--config--location .--options-box--item,
.-cart--config--location .filler {
  flex: 1 0 25%;
  min-width: 240px;
}

.-cart--config--location .--options-box--item label input:checked + div {
  border-color: var(--color-primary);
  background-color: var(--color-secondary);
}

.-cart--config--location .--options-box--item label input:checked + div .--options-box--radio {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
}

.-cart--config--location .--options-box--item label > div {
  display: flex;
  padding: 32px 16px;
  position: relative;
}

.-cart--config--location .--options-box--item label > div .--options-box--radio {
  top: 6px;
  right: 6px;
}

.-cart--config--location .--options-box--item label > div .loc--flag {
  flex: 0 0 46px;
}

.-cart--config--location .--options-box--item label > div .loc--flag img {
  border: 1px solid #ececec;
}

.-cart--config--location .--options-box--item label > div .loc--body {
  flex: 1 1 auto;
  padding-left: 16px;
}

.-cart--config--location .--options-box--item label > div .loc--body .city {
  font-size: 1.1em;
  font-weight: 700;
}

.-cart--config--location .--options-box--item label > div .loc--body .country {
  font-size: 0.875em;
  opacity: 0.9;
}

.-cart--config--location .--options-box--item label > div .loc--body .price {
  position: absolute;
  background: var(--color-surface-font);
  font-weight: 700;
  color: var(--color-surface);
  right: 0;
  bottom: 0;
  padding: 8px;
  border-top-left-radius: 8px;
  font-size: 0.875rem;
}

.-cart--config--location .--options-box--item label > div .loc--body .broker {
  margin-top: 8px;
  color: var(--color-red);
}

.-cart--config--options .--form--row {
  flex: 1 1 0;
  min-width: 240px;
}

.-cart--config--summary h2 {
  display: flex;
  align-items: center;
}

.-cart--config--summary h2 span {
  margin-left: 8px;
}

.-cart--config--summary .sum--btn {
  display: flex;
  align-items: center;
  position: relative;
  padding: 12px 2.5%;
  background-color: var(--color-background);
  color: var(--color-background-font);
}

.-cart--config--summary .sum--btn span {
  flex: 1 1 auto;
  font-size: 0.875em;
  opacity: 0.9;
}

.-cart--config--summary .sum--btn button {
  font-weight: 700;
  padding: 12px 32px;
}

.-cart--config--summary .loader {
  display: inline-block;
  margin-left: 5px;
}

.-cart--config--summary table tr td:first-child {
  padding-left: 3%;
}

.-cart--config--summary table tr td:last-child {
  text-align: right;
  padding-right: 3%;
}

.-cart--config--summary table tr:first-child {
  font-weight: 700;
}

.-cart--config--summary table tr:first-child p:first-child {
  font-size: 1.1rem;
}

.-cart--config--summary table tr:first-child p:last-child {
  display: block;
  font-size: 0.875em;
  opacity: 0.9;
}

.-cart--config--summary table tr.subtotal {
  font-weight: 700;
}

.-cart--config--summary table tr.total {
  font-weight: 700;
}

.-cart--config--summary table tr.total td:last-child {
  font-size: 1.1rem;
  font-weight: 900;
}

.-cart--view {
  display: flex;
}

.-cart--view--section {
  padding: 24px;
  border-bottom: 1px solid var(--color-background-border);
}

.-cart--view--items {
  flex: 1 1 68%;
  padding-right: 32px;
}

.-cart--view--item {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  border-bottom: 1px solid var(--color-background-border);
  padding: 0 12px;
}

.-cart--view--item > div {
  padding: 12px;
}

.-cart--view--item .--desc {
  flex: 1 1 0;
  min-width: 220px;
}

.-cart--view--item .--desc--title {
  margin-bottom: 0;
}

.-cart--view--item .--desc--subtitle {
  font-size: 0.875rem;
}

.-cart--view--item .--desc--opts {
  margin: 12px 0;
  line-height: 1.6;
  font-size: 0.875rem;
}

.-cart--view--item .--desc--actions {
  margin: 12px 0;
  font-size: 0.875em;
}

.-cart--view--item .--desc--actions a, .-cart--view--item .--desc--actions button {
  margin-right: 12px;
  color: var(--color-primary);
  padding: 6px 12px;
}

.-cart--view--item .--qtd {
  flex: 0 0 120px;
}

.-cart--view--item .--qtd input[type=number] {
  width: 100%;
}

.-cart--view--item .--qtd button {
  width: 100%;
  margin-top: 8px;
  padding: 6px 12px;
  font-size: 0.875em;
  color: var(--color-primary);
}

.-cart--view--item .--price {
  flex: 0 0 160px;
  text-align: right;
}

.-cart--view--item .--price--val {
  font-weight: 700;
}

.-cart--view--item .--price--cycle {
  font-size: 0.875em;
}

.-cart--view--sum {
  flex: 0 1 30%;
  min-width: 280px;
}

.-cart--view--sum .loader {
  float: right;
  margin: 8px;
}

.-cart--view--sum .--table {
  width: 100%;
  border: 0;
}

.-cart--view--sum .--table > tbody td {
  padding: 8px 0;
  font-size: 0.875em;
}

.-cart--view--sum .--table > tbody td:first-child {
  padding-right: 4px;
}

.-cart--view--sum .--table > tbody td:nth-child(2) {
  width: 40%;
  font-weight: 700;
  text-align: right;
}

.-cart--view--sum .--sum--body {
  padding: 24px 32px 12px;
}

.-cart--view--sum .--sum--body h2 {
  font-size: 1.3rem;
  margin-bottom: 16px;
}

.-cart--view--sum .--sum--totals {
  padding: 12px 32px 12px;
}

.-cart--view--sum .--sum--checkout {
  padding: 24px 32px 24px;
}

.-cart--view--sum .--sum--checkout .--total {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.-cart--view--sum .--sum--checkout .--total--val {
  text-align: right;
  font-weight: 900 !important;
  font-size: 1.1rem;
}

.-cart--view--sum .--sum--checkout .--btn {
  margin-top: 32px;
}

.-cart--view--sum .--sum--checkout .--btn a {
  width: 100%;
  display: inline-block;
  font-weight: 700;
  text-align: center;
}

.-cart--view--sum .--sum--bottom {
  margin-top: 20px;
  font-size: 0.875em;
  text-align: center;
}

.-cart--view--promo .--title {
  font-weight: 700;
}

.-cart--view--promo .--body {
  margin: 6px 0 12px;
}

.-cart--view--promo .--rem {
  font-size: 0.875em;
}

.-cart--view--promo .--form--combo {
  max-width: 320px;
  margin-top: 8px;
}

@media (max-width: 720px) {
  .-cart--view {
    flex-direction: column;
  }
  .-cart--view--items {
    padding-right: 0;
    margin-bottom: 32px;
  }
}

.-cart--checkout h2 {
  margin-bottom: 16px;
  font-size: 1.3em;
}

.-cart--checkout h3 {
  font-weight: 900;
  font-size: 1rem;
}

.-cart--checkout hr {
  margin: 0;
  border: 0;
  border-top: 1px solid var(--color-background-border);
}

.-cart--checkout .loader {
  display: inline-block;
  margin-left: 5px;
}

.-cart--checkout .--user {
  width: 100%;
  margin: 24px 0;
}

.-cart--checkout .--choose-account {
  flex-wrap: wrap;
  margin: 0 -16px;
}

.-cart--checkout .--choose-account .--options-box--item {
  flex: 1 1 33%;
  min-width: 240px;
}

.-cart--checkout .--choose-account .filler {
  flex: 1 0 33%;
  min-width: 240px;
}

.-cart--checkout .--choose-account .iradio_square-blue {
  position: absolute;
  top: 28px;
  left: 28px;
  pointer-events: none;
}

.-cart--checkout .--choose-account input[type=radio] {
  right: unset;
  left: 18px;
}

.-cart--checkout .--choose-account input:checked + div {
  border-color: var(--color-primary);
  background-color: var(--color-secondary);
}

.-cart--checkout .--choose-account input:disabled + div {
  border-color: var(--color-background-border);
  background-color: var(--color-background-border);
  opacity: 0.8;
  box-shadow: none !important;
}

.-cart--checkout .--choose-account input:disabled + div:hover {
  box-shadow: none !important;
}

.-cart--checkout .--choose-account--body {
  padding: 16px 16px 16px 42px;
  height: 100%;
}

.-cart--checkout .--choose-account--body .--body-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.-cart--checkout .--choose-account--body .--body-title span:first-child {
  font-weight: 700;
}

.-cart--checkout .--choose-account--body .--body-title span.--box.tag {
  display: inline-block;
  padding: 4px 8px;
  text-align: center;
}

.-cart--checkout .--choose-account--body .--body-address {
  margin-top: 6px;
  font-size: 0.875em;
}

.-cart--checkout .--choose-account--body-new {
  padding: 21px 16px 21px 42px;
  font-weight: 900;
}

.-cart--checkout .--pay {
  width: 100%;
  margin: 24px 0;
}

.-cart--checkout .--pay ._total {
  font-weight: 900;
  margin: 0 16px;
}

.-cart--checkout .--pay ._btn-submit input[type=submit] {
  font-weight: 700;
}

.-cart--checkout .--pay--gateway {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  margin: 12px -8px;
}

.-cart--checkout .--pay--gateway label {
  display: inline-flex;
  padding: 16px;
  margin: 8px;
  font-weight: 700;
}

.-cart--checkout .--pay--gateway .iradio_square-blue {
  flex: 0 0 auto;
}

.-cart--checkout .--pay--gateway--info {
  margin: 0 12px;
}

.-cart--checkout .--pay--gateway--info .--logo {
  display: flex;
  align-items: center;
}

.-cart--checkout .--pay--gateway--info .--logo img {
  max-height: 16px;
  width: auto;
  margin-top: 8px;
}

.-cart--checkout .--pay--gateway--info .--logo img + img {
  margin-left: 8px;
}

@media (max-width: 482px) {
  .-cart--checkout .--pay--gateway label {
    flex-basis: 44%;
  }
}

.-cart--checkout .--pay .cc-input-container ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: 16px 0;
}

.-cart--checkout .--pay .cc-input-container .existing-cc-grid {
  display: inline-grid;
  grid-template-columns: repeat(3, auto) minmax(10em, 30em) auto;
}

.-cart--checkout .--pay .cc-input-container .paymethod-info {
  cursor: pointer;
  padding-right: 10px;
  margin-bottom: 5px;
  margin: 16px 0;
}

.-cart--checkout .--pay .form-group {
  width: 100%;
  padding: 8px;
}

.-cart--checkout .--pay .field-error-msg {
  display: none;
  font-size: 0.85em;
  color: var(--color-red);
}

.-cart--checkout .--pay #stripeElements .row {
  display: flex;
  margin: 0 -16px;
  flex-wrap: wrap;
}

.-cart--checkout .--pay #stripeElements .col-md-6 {
  margin: 8px 16px;
  width: 220px;
}

.-cart--checkout .--pay #stripeElements .col-md-3 {
  margin: 8px 16px;
  width: 120px;
}

.-cart--checkout .--pay #stripeElements .form-control.StripeElement {
  background-color: var(--color-form-stripe);
}

.-cart--checkout .--pay .apply-credit-container {
  padding: 24px 24px 8px;
  margin-bottom: 24px;
}

.-cart--checkout .--pay .apply-credit-container label {
  display: block;
  margin: 16px 0;
  line-height: 1.4;
}

.-cart--checkout .--footnote {
  margin: -8px 12px 0;
  font-size: 0.875em;
}

.-cart--invoice {
  display: flex;
}

.-cart--invoice--main {
  flex: 1 1 58%;
  padding-right: 32px;
}

.-cart--invoice--main h2 {
  font-size: 1.1rem;
}

.-cart--invoice--main--opts {
  display: inline-grid;
  grid-template-columns: repeat(3, auto) minmax(10em, 30em) auto;
}

.-cart--invoice--main--opts > div {
  margin: 8px 0;
  padding-right: 5px;
}

.-cart--invoice--main--opt-new {
  margin: 8px 0;
}

.-cart--invoice--main--opt-new span {
  padding-left: 5px;
}

.-cart--invoice--main .form-group {
  width: 100%;
  padding: 8px;
}

.-cart--invoice--main .field-error-msg {
  display: none;
  font-size: 0.85em;
  color: var(--color-red);
}

.-cart--invoice--main #stripeElements .col-sm-2 {
  width: 100px;
}

.-cart--invoice--main #stripeElements .col-sm-2 {
  width: 100px;
}

.-cart--invoice--main #cvvWhereLink {
  margin: 6px 4px;
  font-size: 0.875rem;
  background: none;
  padding: 0;
  color: var(--color-primary);
  border: 0;
  cursor: pointer;
}

.-cart--invoice--main #cvvWhereLink:hover {
  text-decoration: underline;
}

.-cart--invoice--main #billingAddressChoice > label {
  margin-bottom: 16px;
}

.-cart--invoice--sum {
  flex: 0 1 40%;
  min-width: 280px;
}

.-cart--invoice--sum .--table {
  width: 100%;
  border: 0;
}

.-cart--invoice--sum .--table > tbody td {
  font-size: 0.875em;
}

.-cart--invoice--sum .--table > tbody tr.divider td {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--color-surface-border);
}

.-cart--invoice--sum .--table > tbody td:first-child {
  padding: 8px 4px 8px 24px;
}

.-cart--invoice--sum .--table > tbody td:nth-child(2) {
  padding: 8px 24px 8px 4px;
  width: 40%;
  font-weight: 700;
  text-align: right;
}

.-cart--invoice--sum .--sum--body h2 {
  padding: 24px 24px 4px;
  font-size: 1.3rem;
  margin-bottom: 16px;
}

.-cart--invoice--sum .--sum--body .--total td:first-child {
  font-weight: 700;
  font-size: 1rem;
}

.-cart--invoice--sum .--sum--body .--total td:nth-child(2) {
  font-weight: 900 !important;
  font-size: 1.1rem;
}

.-cart--invoice .--footnote {
  display: flex;
  margin: 16px 0 0;
  font-size: 0.875em;
  align-items: center;
}

.-cart--invoice .--footnote svg {
  flex: 0 0 auto;
  fill: currentColor;
  width: 20px;
  margin-right: 4px;
}

@media (max-width: 860px) {
  .-cart--invoice {
    flex-direction: column-reverse;
  }
  .-cart--invoice--main {
    padding-right: 0;
    margin-top: 32px;
  }
}

.-cart--change-location {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  align-items: center;
  justify-content: center;
}

.-cart--change-location.show {
  display: flex;
}

.-cart--change-location > div {
  display: flex;
  align-items: center;
  padding: 16px;
}

.-cart--change-location span {
  margin-left: 4px;
}

.-cart--change-location svg {
  color: currentColor;
  width: 16px;
  height: 16px;
  animation: spinner-border 3s linear infinite;
  margin-right: 4px;
}

.dataTables_wrapper > .row:first-child,
.dataTables_wrapper > .row:last-child {
  display: flex;
  align-items: center;
  font-size: 0.85em;
  margin: 12px 4px;
}

.dataTables_wrapper > .row:first-child > div:first-child,
.dataTables_wrapper > .row:last-child > div:first-child {
  flex: 1;
}

.dataTables_wrapper > .row:last-child ul {
  display: flex;
}

.dataTables_wrapper > .row:last-child ul li {
  list-style: none;
  padding: 2px;
  margin: 0 10px;
  border-bottom: 3px solid transparent;
}

.dataTables_wrapper > .row:last-child ul li.active {
  font-weight: 700;
  border-color: var(--color-primary);
}

.dataTables_wrapper > .row:last-child ul li.disabled > a {
  cursor: not-allowed;
  opacity: 0.9;
}

.dataTables_length select,
.dataTables_filter input[type=search] {
  background-color: var(--color-form);
  color: var(--color-form-font);
  border: 1px solid var(--color-form-border);
  padding: 6px;
  margin: 0 2px;
  border-radius: 8px;
}

.dataTables_length select:focus,
.dataTables_filter input[type=search]:focus {
  outline: 2px solid transparent;
  border-color: var(--color-primary);
}

.providerPreLinking {
  min-height: 52px;
}

.providerLinkingFeedback {
  display: none;
}

.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 4rem;
}

.alert-dismissible .close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 0.75rem 1.25rem;
  color: inherit;
}

.alert-primary {
  color: #1b3550;
  background-color: #d6e0eb;
  border-color: #c6d4e2;
}

.alert-primary hr {
  border-top-color: #b5c7d9;
}

.alert-primary .alert-link {
  color: #0e1c2a;
}

.alert-secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db;
}

.alert-secondary hr {
  border-top-color: #c8cbcf;
}

.alert-secondary .alert-link {
  color: #202326;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.alert-success hr {
  border-top-color: #b1dfbb;
}

.alert-success .alert-link {
  color: #0b2e13;
}

.alert-info {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}

.alert-info hr {
  border-top-color: #abdde5;
}

.alert-info .alert-link {
  color: #062c33;
}

.alert-warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}

.alert-warning hr {
  border-top-color: #ffe8a1;
}

.alert-warning .alert-link {
  color: #533f03;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.alert-danger hr {
  border-top-color: #f1b0b7;
}

.alert-danger .alert-link {
  color: #491217;
}

.alert-light {
  color: #818182;
  background-color: #fefefe;
  border-color: #fdfdfe;
}

.alert-light hr {
  border-top-color: #ececf6;
}

.alert-light .alert-link {
  color: #686868;
}

.alert-dark {
  color: #1b1e21;
  background-color: #d6d8d9;
  border-color: #c6c8ca;
}

.alert-dark hr {
  border-top-color: #b9bbbe;
}

.alert-dark .alert-link {
  color: #040505;
}

.icheckbox_square-blue,
.iradio_square-blue {
  display: inline-block;
  *display: inline;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  width: 22px;
  height: 22px;
  background: url(blue.png) no-repeat;
  border: none;
  cursor: pointer;
}

.icheckbox_square-blue {
  background-position: 0 0;
}

.icheckbox_square-blue.hover {
  background-position: -24px 0;
}

.icheckbox_square-blue.checked {
  background-position: -48px 0;
}

.icheckbox_square-blue.disabled {
  background-position: -72px 0;
  cursor: default;
}

.icheckbox_square-blue.checked.disabled {
  background-position: -96px 0;
}

.iradio_square-blue {
  background-position: -120px 0;
}

.iradio_square-blue.hover {
  background-position: -144px 0;
}

.iradio_square-blue.checked {
  background-position: -168px 0;
}

.iradio_square-blue.disabled {
  background-position: -192px 0;
  cursor: default;
}

.iradio_square-blue.checked.disabled {
  background-position: -216px 0;
}

/* HiDPI support */
@media (min-resolution: 120dpi), (min-resolution: 1.25dppx) {
  .icheckbox_square-blue,
  .iradio_square-blue {
    background-image: url(blue@2x.png);
    background-size: 240px 24px;
  }
}

.twofa-setup .modal-body {
  min-height: 100px;
}

.twofa-setup .activation-msg {
  margin: 25px 0;
  padding: 15px;
  border: 1px dashed #ddd;
  text-align: center;
  font-weight: bold;
  font-size: 1.1em;
}

.twofa-setup .backup-code {
  margin: 20px auto;
  padding: 10px;
  background-color: #efefef;
  color: #444;
  text-align: center;
}

.twofa-module {
  margin: 10px 0;
  padding: 14px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  background-color: var(--color-surface);
}

.twofa-module .col-radio {
  float: left;
  width: 35px;
  margin-top: 12px;
}

.twofa-module .col-logo {
  float: left;
  width: 80px;
  line-height: 40px;
  text-align: center;
}

.twofa-module .col-description {
  margin-left: 136px;
}

.twofa-module img {
  max-width: 100%;
  max-height: 40px;
}

.twofa-module.active {
  border-color: #337ab7;
}

.fade {
  transition: opacity 0.15s linear;
}

@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}

.fade:not(.show) {
  opacity: 0;
}

.tab-content > .tab-pane {
  display: none;
}

.tab-content > .active {
  display: block;
}
