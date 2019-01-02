# 指定node镜像版本
FROM node:10

# 创建远程工作目录
WORKDIR /usr/***

# package.json、package-lock.json、yarn.lock复制到工作目录
# COPY package.json *.lock .

# 只安装dependencies依赖，node镜像自带yarn
RUN yarn --only=prod --registry=https://registry.npm.taobao.org

# 复制其他源文件到工作目录
COPY . .

# 实际端口号
EXPOSE 4001

#　实际命令
CMD ["npm", "start"]