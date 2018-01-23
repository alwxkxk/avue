# avue

> A Vue.js project
## 部署
### 下载 编译
```bash
cd /var
git clone https://github.com/alwxkxk/avue
cd /var/avue
npm install
npm run build
```

### nginx配置
可直接参考`confing/nginx.conf`
- 注意需要先创建用户www
- 手动创建`/var/www/images`目录
修改后执行 `sudo nginx -s reload`使配置文件生效

### 访问测试
```bash
curl http://127.0.0.1
```
