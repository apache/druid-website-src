---
title: Download
layout: simple_page
sectionid: download
canonical: 'http://druid.io/downloads.html'
---

## Latest release

{% for branch in site.druid_versions limit:1 %}
{% for release in branch.versions limit:1 %}
The latest Apache Druid (incubating) stable release is {{ release.version }}.

<p>
<a class="large-button download" href="https://www.apache.org/dyn/closer.cgi?path=/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-bin.tar.gz" download onclick="trackDownload('button', 'https://www.apache.org/dyn/closer.cgi?path=/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-bin.tar.gz');"><span class="fa fa-download"></span> Download {{release.version}} release</a><br>
</p>

* Release date: {{ release.date | date: "%b %e %Y" }}
* Binary download: [apache-druid-{{ release.version }}-bin.tar.gz](https://www.apache.org/dyn/closer.cgi?path=/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-bin.tar.gz) ([sha512](https://www.apache.org/dist/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-bin.tar.gz.sha512), [pgp](https://www.apache.org/dist/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-bin.tar.gz.asc))
* Source download: [apache-druid-{{ release.version }}-src.tar.gz](https://www.apache.org/dyn/closer.cgi?path=/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-src.tar.gz) ([sha512](https://www.apache.org/dist/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-src.tar.gz.sha512), [pgp](https://www.apache.org/dist/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-src.tar.gz.asc))
* Release notes: [{{ release.version }}](https://github.com/apache/incubator-druid/releases/tag/druid-{{ release.version }})
{% endfor %}
{% endfor %}

You should verify your download by following these [procedures](https://www.apache.org/info/verification.html) and using these [KEYS](https://www.apache.org/dist/incubator/druid/KEYS).

To learn more about releases, please visit the [versioning page](/docs/latest/development/versioning.html).

## Get started

To get started with Druid, visit the [quickstart](/docs/latest/tutorials/index.html).

## Optional dependencies

### MySQL JDBC Driver

Due to licensing considerations, the MySQL metadata store extension does not include the required MySQL JDBC driver which
must be downloaded separately. Please see the [documentation](/docs/latest/development/extensions-core/mysql.html) for instructions on how to include this library.

## Release candidates

Release candidates are announced on the [Druid dev mailing list](https://lists.apache.org/list.html?dev@druid.apache.org).

If you are interested in being notified of upcoming release candidates and being involved in the dev community (e.g. validating and approving RC builds), you can subscribe to the list by emailing: **dev-subscribe@druid.apache.org**

Previous discussions are available in the [Apache Mail Archives](https://lists.apache.org/list.html?dev@druid.apache.org).

## Older releases

{% for branch in site.druid_versions limit:1 offset:1 %}
The previous major release branch of Apache Druid was {{ branch.release }}.
{% for release in branch.versions limit:1 %}

##### {{ release.version }}

* Release date: {{ release.date | date: "%b %e %Y" }}
* Binary download: [apache-druid-{{ release.version }}-bin.tar.gz](https://www.apache.org/dyn/closer.cgi?path=/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-bin.tar.gz) ([sha512](https://www.apache.org/dist/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-bin.tar.gz.sha512), [pgp](https://www.apache.org/dist/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-bin.tar.gz.asc))
* Source download: [apache-druid-{{ release.version }}-src.tar.gz](https://www.apache.org/dyn/closer.cgi?path=/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-src.tar.gz) ([sha512](https://www.apache.org/dist/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-src.tar.gz.sha512), [pgp](https://www.apache.org/dist/incubator/druid/{{ release.version }}/apache-druid-{{ release.version }}-src.tar.gz.asc))
* Release notes: [{{ release.version }}](https://github.com/apache/incubator-druid/releases/tag/druid-{{ release.version }})
{% endfor %}
{% endfor %}

All other releases of Apache Druid are available at the [Apache release archives](https://archive.apache.org/dist/incubator/druid/).
