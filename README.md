コマンド例：
`cdk deploy -c stage=dev`

CloudFormationが以下の内容をアウトプットします。

- GitBranch: デプロイ時のGitブランチ名
- GitCommit: デプロイ時のGitコミットのハッシュナンバー
- GitRemoteUrl: デプロイ時のGitリモートリポジトリのURL
- CdkStage: CDKデプロイ時にコンテクストとして与えたstageの値
- CdkStageParams: CDKデプロイ時にコンテクストとして与えたstageのJSONを文字列化したもの

![スクリーンショット 2022-09-11 12 30 20](https://user-images.githubusercontent.com/557268/189511503-cbf4e9e4-c2ad-4a15-a45b-dbbf332cf36d.png)
