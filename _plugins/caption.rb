class Jekyll::MarkdownCaption < Jekyll::Converters::Markdown
  def convert(content)
      super
        .gsub(/<\/table>\n+<p>Table: (.*?)<\/p>/, '<caption>\1</caption></table>')
  end
end