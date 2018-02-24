#### `!!{username: "", content: ""}` 返回 `true`，应该单独判断。

#### `value={this.state.xx.trim()}`,虽然react有，但是我们不应该屏蔽空格的输入，所以还是自己写比较好，用户名可以屏蔽，但评论不应该屏蔽