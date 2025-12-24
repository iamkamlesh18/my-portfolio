// Blog/data.js

import { salesforceBlog } from './salesforce/salesforceBlog';
import { adminBlog } from './admin/adminBlog';
import { devBlog } from './development/devBlog';

export const blogData = {
  salesforce: salesforceBlog,
  admin: adminBlog,
  development: devBlog
};
