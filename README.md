コマンド例：
`cdk deploy -c stage=dev`

CloudFormationが以下の内容をアウトプットします。

- GitBranch: デプロイ時のGitブランチ名
- GitCommit: デプロイ時のGitコミットのハッシュナンバー
- GitRemoteUrl: デプロイ時のGitリモートリポジトリのURL
- CdkStage: CDKデプロイ時にコンテクストとして与えたstageの値
- CdkParams: CDKデプロイ時のパラメータのJSONを文字列化したもの

![スクリーンショット 2022-09-12 10 01 20](https://user-images.githubusercontent.com/557268/189557508-2f7e606a-8e78-417e-b0c9-1ebf484ae779.png)
