1. 安装Docker
本教程操作环境为Linux Ubuntu系统，在开始之前，我们需要先安装Docker。

在终端中执行下方命令：

添加Docker源

# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
​
# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
安装Dokcer包

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
通过运行映像来验证 Docker 引擎安装是否成功

sudo docker run hello-world


2. 使用Docker拉取Excalidraw镜像

sudo docker pull excalidraw/excalidraw

然后执行查看镜像命令：

sudo docker images


3. 创建并启动Excalidraw容器
成功拉取Excalidraw镜像后，我们可以使用该镜像创建并运行一个Excalidraw容器。

在终端执行以下命令：

$ sudo docker run --platform linux/amd64 -v ./excalidraw-data:/app/data -d --name excalidraw -p 5000:80 excalidraw/excalidraw
参数说明：

--platform linux/amd64：指定平台为amd64架构，确保兼容性。
-v ./excalidraw-data:/app/data：将本地目录`./excalidraw-data`挂载到容器内的`/app/data`目录，用于存储Excalidraw的数据。
–name excalidraw：本例容器名称为excalidraw，大家可以自己起名。
-p 5000:80： 端口进行映射，将本地 5000 端口映射到容器内部的 80 端口。
-d ：设置容器在在后台一直运行。

4. 访问Excalidraw
打开浏览器，访问 `http://localhost:5000`，即可访问Excalidraw应用。

5. 停止和删除Excalidraw容器
如果需要停止Excalidraw容器，可以执行以下命令：
sudo docker stop excalidraw
如果需要删除Excalidraw容器，可以执行以下命令：
sudo docker rm excalidraw




