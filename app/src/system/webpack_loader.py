from webpack_loader.loader import WebpackLoader as NativeWebpackLoader


class WebpackLoader(NativeWebpackLoader):
    def filter_chunks(self, chunks):
        for chunk_name in chunks:
            ignore = any(regex.match(chunk_name) for regex in self.config['ignores'])
            if not ignore:
                # chunk['url'] = self.get_chunk_url(chunk)
                chunk = {'name': chunk_name}
                assets = self.get_assets()
                if assets.get('publicPath'):
                    chunk['publicPath'] = assets['assets'][chunk_name]['publicPath']
                yield {
                    'name': chunk_name,
                    'url': self.get_chunk_url(chunk),
                }
