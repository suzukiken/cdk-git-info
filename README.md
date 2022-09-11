コマンド例：
`cdk deploy -c stage=dev`

CloudFormationが以下の内容をアウトプットします。

- GitBranch: デプロイ時のGitブランチ名
- GitCommit: デプロイ時のGitコミットのハッシュナンバー
- CdkStage: CDKデプロイ時にコンテクストとして与えたstageの値
- CdkStageParams: CDKデプロイ時にコンテクストとして与えたstageのJSONを文字列化したもの
