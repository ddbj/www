---
layout: indexed_content
title: WABI BLAST
category: services
lang: en
---

## Overview

WABI provides web APIs for using BLAST.

  - A [search job](#search-job) is registered in a queue by submitting a
    [BLAST search criteria](#search-criteria). A [Request
    ID](#parameter-Request-ID) is returned as response data.  
    Once a search job is registered in the queue, the state of the job
    transitions from “Waiting” ==> “Executing” ==> “Completed”.  
    Once the status of a job moves to the “Completed” state, the
    corresponding search results will be available for viewing. Results
    are retained on the server and can be viewed for up to 7 days after
    the search has been executed.  
    (Refer to "Search result retention period" [「Request ID and BLAST
    result」](blast-help-e.html#result) )
  - Returns [the status of the BLAST search](#search-job) for a
    specified [Request ID](#parameter-Request-ID).
  - Returns [the BLAST search criteria](#search-criteria) for a
    specified [Request ID](#parameter-Request-ID).
  - Returns [the BLAST search result](#search-result) for a specified
    [Request ID](#parameter-Request-ID).



## Searching WABI BLAST



### BLAST search job <a name="search-job"></a>

A BLAST search job is first registered in the queue of jobs awaiting
execution. The job is then executed as soon as computing resources
become free.

See Also: [Search job status](#search-status)





### Search Job Status <a name="search-status"></a>

WABI search jobs transition through the following status.


| Job Status  | Explanation                                                                    |
| ----------- | ------------------------------------------------------------------------------ |
| waiting   | The job has been added to the queue, but has not yet commenced execution.      |
| running   | The job is being executed.                                                     |
| finished  | The job has completed execution.                                               |
| not-found | The job with the specified [Request ID](#parameter-Request-ID) does not exist. |



Example [response values when querying job status](#URI_GET_status):

```
1 request-ID: wabi_blast_1111-1111-1111-11-111-111111
2 status: finished
3 current-time: 2013-01-01 12:34:56
4 system-info:
5 stdout

1 {
2         "request-ID": "wabi_blast_1111-1111-1111-11-111-111111",
3         "status": "finished",
4         "current-time": "2013-01-01 12:34:56",
5         "system-info": "nstdout" 
6 }
1 <?xml version="1.0" ?>
2 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
3 <result>
4   <request-ID>wabi_blast_1111-1111-1111-11-111-111111</request-ID>
5   <status>finished</status>
6   <current-time>2013-01-01 12:34:56</current-time>
7   <system-info>stdout</system-info>
8 </result>
```

```
 1 {
 2         "error-message": "Unexpected error (status == null)",
 3         "requestId": "wabi_blast_1111-1111-1111-11-111-111111",
 4         "jobId": "123456",
 5         "month": "01",
 6         "day": "01",
 7         "hour": "12",
 8         "min": "34",
 9         "sec": "56",
10         "millisec": "789",
11         "randomId": "987654" 
12 }
```


### BLAST search criteria <a name="search-criteria"></a>

Example of parameters that are passed on when a [BLAST job is
submitted](#URI_POST) using WABI.

Example:

```
 1 {
 2         "address": "",
 3        "database": "hum",
 4         "datasets": "ddbjall",
 5         "format": "json",
 6         "parameters": " -v 100 -b 100 -e 10 -F F -W 11",
 7         "program": "blastn",
 8        "querySequence": ">my query sequence 1nCACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAAnGCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTGnGTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCACn",
 9        "result": "www" 
10 }
```


### BLAST search result <a name="search-result"></a>

The following is an example of the BLAST search output. This is the same
as the file generated using the blastall command, when executed using
the "-o" command line option.

Example:

```
 1 BLASTN 2.2.25 [Feb-01-2011]
 2 
 3 Reference: Altschul, Stephen F., Thomas L. Madden, Alejandro A. Schaffer,
 4 Jinghui Zhang, Zheng Zhang, Webb Miller, and David J. Lipman (1997),
 5 "Gapped BLAST and PSI-BLAST: a new generation of protein database search
 6 programs",  Nucleic Acids Res. 25:3389-3402.
 7 
 8 Query= AB000095|AB000095.1 Homo sapiens mRNA for hepatocyte growth
 9 factor activator inhibitor, complete cds.
10          (1740 letters)
11 
12 Database: hum
13            572,091 sequences; 5,019,832,159 total letters
14 
15 Searching..................................................done
16 
17                                                                  Score    E
18 Sequences producing significant alignments:                      (bits) Value
19 
20 AB000095|AB000095.1 Homo sapiens mRNA for hepatocyte growth fact...  3449   0.0
21 BC018702|BC018702.1 Homo sapiens serine peptidase inhibitor, Kun...  3435   0.0
22 BC004140|BC004140.1 Homo sapiens serine peptidase inhibitor, Kun...  3190   0.0
23 BT007425|BT007425.1 Homo sapiens serine protease inhibitor, Kuni...  3053   0.0
24 AY358969|AY358969.1 Homo sapiens clone DNA35880 HAI-1 (UNQ223) m...  2145   0.0
25 AY296715|AY296715.1 Homo sapiens hepatocyte growth factor activa...  1984   0.0
(後略)
        
```


### BLAST search result image <a name="search-image"></a>

BLAST search jobs submitted using WABI generate a graphical display of
the search output.

Example:

[![Detail view_6_1]({{ site.baseurl }}/assets/images/help/wabi_blast_imagedata.png){:.w500}]({{ site.baseurl }}/assets/images/help/wabi_blast_imagedata.png ){:.group1}

## WABI BLAST usage examples

{::options parse_block_html="true" /}
<div class="accordion-menu">
<h3 class="toggle-content-btn"><a href="javascript:void(0)">Code example using Java</a></h3>
<div class="accordion-content">#### Example of code

Example.java
: <script src="https://gist.github.com/ddbj-repo/d2ead08e9b9664418c34e292392f1ca8.js"></script>

blast_condition.fasta
: 
```
>my query sequence 1
CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC
```

blast_condition.txt  
: [Code](https://gist.github.com/ddbj-repo/22e92ce2e085be3f34fe072298241639)
```
datasets        ddbjall
database        hum
program blastn
parameters      -v 100 -b 100 -e 10 -F F -W 11
format  json
result  www
```

pom.xml
: <script src="https://gist.github.com/ddbj-repo/4978b238ca7dbb94ebeebae0184cd6ce.js"></script>

#### Execution example

Preliminary preparation (Please run first)
: 
```
$ wget 'http://sourceforge.jp/frs/redir.php?m=iij&f=%2Fjsonic%2F56583%2Fjsonic-1.3.0.zip'
$ unzip jsonic-1.3.0.zip
$ mv jsonic-1.3.0/jsonic-1.3.0.jar src/main/resources/
$ tree -F
.
├── blast_condition.fasta
├── blast_condition.txt
├── pom.xml
└── src/
    └── main/
        ├── java/
        │   └── Example.java
        └── resources/
            └── jsonic-1.3.0.jar
```

Build
: 
```
$ mvn clean
$ mvn compile
$ mvn package
$ mvn assembly:assembly -DdescriptorId=jar-with-dependencies
```

Execution procedure
: 
```
$ java -classpath 'target/wabi-client-1.jar:target/wabi-client-1-jar-with-dependencies.jar:src/main/resources/jsonic-1.3.0.jar' Example
```

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h3 class="toggle-content-btn"><a href="javascript:void(0)">Code example using Perl</a></h3>
<div class="accordion-content">#### Example of code

example.pl
: <script src="https://gist.github.com/ddbj-repo/b2f7e3ac56745a63b719908945518d4c.js"></script>

blast_condition.fasta
: 
```
>my query sequence 1
CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC
```

blast_condition.txt  
: [Code](https://gist.github.com/ddbj-repo/22e92ce2e085be3f34fe072298241639)
```
datasets        ddbjall
database        hum
program blastn
parameters      -v 100 -b 100 -e 10 -F F -W 11
format  json
result  www
```

#### Execution example

Preliminary preparation (Please run first)
: 
```
$ cpan
cpan[1] install JSON
cpan[2]> install HTTP::Request::Common
cpan[3]> install LWP::UserAgent
cpan[4]> install HTTP::Status
cpan[5]> quit
$ tree -F
.
├── blast_condition.fasta
>├── blast_condition.txt
└── example.pl
```

Execution procedure
: 
```
$ perl example.pl
```

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h3 class="toggle-content-btn"><a href="javascript:void(0)">Code example using Ruby</a></h3>
<div class="accordion-content">#### Example of code

example.rb
: <script src="https://gist.github.com/ddbj-repo/aa94320d3ab88ae27e53371868885cfd.js">

blast_condition.fasta
: 
```
>my query sequence 1
CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC
```

blast_condition.txt  
: [Code](https://gist.github.com/ddbj-repo/22e92ce2e085be3f34fe072298241639)

```
datasets        ddbjall
database        hum
program blastn
parameters      -v 100 -b 100 -e 10 -F F -W 11
format  json
result  www
```

#### Execution example

Execution procedure
: 
```
$ ruby example.rb
```

Actual example
: <script src="https://gist.github.com/ddbj-repo/d9e1d2d44aaecdb890ec12196dc52dbd.js"></script>

#### Example of the execution result

wabi_blast_2013-0606-1336-31-681-634313.txt
: <script src="https://gist.github.com/ddbj-repo/aea641167c10b4c56ec08b1c4e230f2a.js"></script>

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

## WABI BLAST Details

### URI POST /blast (submit a search job) <a name="URI_POST"></a>

This method appends a [BLAST search to the job queue](#search-job) and
returns the [Request ID](#parameter-Request-ID).  
The BLAST search criteria, method for notifying the result, and other
options are specified using HTTP parameters.

<table>
  <thead>
    <tr>
      <th colspan="2">Item</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">HTTP Method</td>
      <td>POST</td>
    </tr>
    <tr>
    <td colspan="2">URI</td>
    <td>/blast</td>
    </tr>
    <tr>
    <td rowspan="8">HTTP Parameters</td>
    <td><code class="language-plaintext highlighter-rouge">querySequence</code></td>
    <td>
<a href="#parameter-querySequence">Search sequence data in multi-FASTA format</a> <br>
              <pre class="code"><code class="language-plaintext highlighter-rouge">example: &gt;my query sequence 1
CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC</code></pre><br>
              <span class="red">Note: Increasing the number of sequences will not increase the degree of parallel processing.<br>We recommend reducing the number of sequences searched for the web API, as this will better balance the load on the job management engine.</span>
</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">datasets</code></td>
      <td>
<a href="#parameter-datasets">Dataset</a> (example: <code class="language-plaintext highlighter-rouge">"ddbjall"</code>)</td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">database</code></td>
    <td>
<a href="#parameter-database">database</a> (example: <code class="language-plaintext highlighter-rouge">"hum"</code>, <code class="language-plaintext highlighter-rouge">"hum pri"</code>)</td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">program</code></td>
    <td>
<a href="#parameter-program">BLAST program</a> (example: <code class="language-plaintext highlighter-rouge">"blastn"</code>)</td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">parameters</code></td>
    <td>
<a href="#parameter-parameters">Other options</a> (example: <code class="language-plaintext highlighter-rouge">"-v 100 -b 100 -e 10 -F F -W 11"</code>)</td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">format</code></td>
      <td>
<a href="#parameter-format">response data format</a> (example: <code class="language-plaintext highlighter-rouge">"text"</code>, <code class="language-plaintext highlighter-rouge">"json"</code>)</td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">result</code></td>
    <td>
<a href="#parameter-result">result retrieval method</a> (example: <code class="language-plaintext highlighter-rouge">"www"</code>, <code class="language-plaintext highlighter-rouge">"mail"</code>)</td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">address</code></td>
    <td><a href="#parameter-address">Email address</a></td>
    </tr>
    <tr>
    <td colspan="2">Request action</td>
    <td>Add a new BLAST search job to the queue for processing.</td>
    </tr>
    <tr>
    <td rowspan="2" class="borderbtm">HTTP Response</td>
    <td>If successful</td>
    <td>
<a href="#parameter-Request-ID">Request ID</a></td>
    </tr>
    <tr>
    <td>If failed</td>
      <td>HTTP status <em>4xx</em>
</td>
    </tr>
  </tbody>
</table>


#### Server-side processing flow

  1. Check validity of input values.  
    If an invalid input value is found, then the processing is
    interrupted and HTTP status 400 Bad Request is returned.
  2. Add the BLAST search into the job queue.
  3. Information about the job added to the queue is returned using the
    specified format.  
    If the specified format is not available, then HTTP status 404 Not
    Found is returned.

#### Input validation check performed

<table>
  <tbody>
    <tr>
      <th class="first">
<a href="#parameter-datasets">datasets</a><br>(optional)</th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Causes an input validation error if an undefined value is specified.<br>
            Note: Currently not used. Consistency check between the <code class="language-plaintext highlighter-rouge">database</code> is not performed.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-database">database</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Required value.</li>
        <li>Database names must be separated by spaces; otherwise, the check will cause an input validation error. Database names must comprise only alphabets and underscore "_".<br>
          example: <code class="language-plaintext highlighter-rouge">"hum"</code>, <code class="language-plaintext highlighter-rouge">"hum pri"</code> and so on.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-program">program</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Required value.</li>
        <li>Causes an input validation error if an undefined value is specified.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-format">format</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Required value.</li>
        <li>Causes an input validation error if an undefined value is specified.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first">
<a href="#parameter-parameters">parameters</a><br>(optional)</th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Causes an input validation error unless options and corresponding values are listed using space as separators.</li>
          <li>Causes an input validation error if invalid options are specified. A valid option depends on the specified <code class="language-plaintext highlighter-rouge">program</code>, as follows:
          <ul class="decimal bottom_space">
            <li>In case <code class="language-plaintext highlighter-rouge">program</code> value is <code class="language-plaintext highlighter-rouge">"megablast"</code> :<br>
              Options must be one or more of <code class="language-plaintext highlighter-rouge">ADEFGHIJLMNPRSTUVWXYZbefglmnpqrstvyz</code>; other options will cause an input validation error.<br>
              example: <code class="language-plaintext highlighter-rouge">"-A"</code> is a valid option, but <code class="language-plaintext highlighter-rouge">"-B"</code> will cause an input validation error.</li>
            <li>For all other <code class="language-plaintext highlighter-rouge">program</code> values:<br>
              Options must be one or more of <code class="language-plaintext highlighter-rouge">ABCDEFGIJKLMPQSTUVWXYZbefglmnqrstvwyz</code>; other options will cause an input validation error.<br>
              example: <code class="language-plaintext highlighter-rouge">"-B"</code> is a valid option, but <code class="language-plaintext highlighter-rouge">"-H"</code> will cause an input validation error.</li>
          </ul>
        </li>
        <li>Option values can be a numeric value, alphanumeric characters, or comma-separated alphanumeric characters.<br>
          example: <code class="language-plaintext highlighter-rouge">"-1"</code>, <code class="language-plaintext highlighter-rouge">"foo, bar"</code>, etc.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-result">result</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Required value.</li>
          <li>Causes an input validation error if an undefined value is specified.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-address">address</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Requires value if the value of <code class="language-plaintext highlighter-rouge">result</code> is <code class="language-plaintext highlighter-rouge">"mail"</code>.</li>
          <li>Only a valid email address is permitted. Other values will cause an input validation error.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### Response data

In the case of successful completion:
: 
- A “successful” HTTP status code such as 200 will be returned.
- The field requestId will contain Request ID.
- Other values such as current-time and other request
  information may be included in the response data; however,
  formatting of these values may change in the future.  
  Please use the HTTP status code to determine the success or
  failure of the request.

In the case of failed completion:
: 
- A “client error” HTTP status code such as 400 will be
  returned.
- The key called error-messages included in the returned data
  will contain an error message indicating information such as the
  name of the parameter that caused input validation error.
- Other values including the cause of the error and other request
  information may be included in the returned data; however,
  formatting of these values may change in the future.  
  Please use the HTTP status code to determine the success or
  failure of the request.

#### Example request and response <a name="uripost-example"></a>

Examples of input data

<table>
  <thead>
    <tr>
      <th>HTTP Parameter</th>
      <th>Input Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">address</code></td>
      <td><code class="language-plaintext highlighter-rouge">""</code></td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">database</code></td>
    <td><code class="language-plaintext highlighter-rouge">"hum"</code></td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">datasets</code></td>
    <td><code class="language-plaintext highlighter-rouge">"ddbjall"</code></td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">format</code></td>
    <td><code class="language-plaintext highlighter-rouge">"json"</code></td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">parameters</code></td>
    <td><code class="language-plaintext highlighter-rouge">" -v 100 -b 100 -e 10 -F F -W 11"</code></td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">program</code></td>
    <td><code class="language-plaintext highlighter-rouge">"blastn"</code></td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">querySequence</code></td>
    <td><pre><code class="language-plaintext highlighter-rouge">&gt;my query sequence 1
    CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
    GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
    GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC</code></pre></td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">result</code></td>
    <td><code class="language-plaintext highlighter-rouge">"www"</code></td>
    </tr>
  </tbody>
</table>

Example response for a successfully completed request

```
HTTP Status 200
 1 {
 2        "requestId": "wabi_blast_1111-1111-1111-11-111-111111",
 3        "program": "blastn",
 4        "datasets": "ddbjall",
 5        "database": "hum",
 6        "parameters": " -v 100 -b 100 -e 10 -F F -W 11 ",
 7        "current-time": "2013-01-01 12:34:56",
 8        "start-time": "",
 9        "current-state": "" 
10 }
```

```
HTTP Status 200
 1 <?xml version="1.0" ?>
 2 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
 3 <result>
 4   <requestId>wabi_blast_1111-1111-1111-11-111-111111</requestId>
 5   <program>blastn</program>
 6   <datasets>ddbjall</datasets>
 7   <database>hum</database>
 8   <parameters> -v 100 -b 100 -e 10 -F F -W 11 </parameters>
 9   <current-time>2013-01-01 12:34:56</current-time>
10   <start-time></start-time>
11   <current-state></current-state>
12 </result>
```

Example response data when there is an input validation error

```
HTTP Status 400
 1    {
 2    "status": "illegal-arguments",
 3    "message": "Illegal arguments.",
 4    "format": null,
 5    "program": "blastn",
 6    "datasets": "ddbjall",
 7    "database": "hum",
 8    "parameters": null,
 9    "querySequence": ">my query sequence 1nCACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAAnGCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTGnGTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCACn",
10    "result": "",
11    "address": null,
12    "current-time": "2013-01-01 12:34:56",
13    "error-messages": [
14        "Required: (result)" 
15    ],
16    "error-message": "BAD_REQUEST (null)" 
17    }
```

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h4 class="toggle-content-btn"><a href="javascript:void(0)">Usage Example</a></h4>
<div class="accordion-content">Example of the use of the REST client on Java Spring Framework:
    <script src="https://gist.github.com/ddbj-repo/ec96049ec11c1d22303d9fcdea9f70cd.js"></script>

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

### URI GET /blast/{Request-ID}?info=status (query the status of a search job) <a name="URI_GET_status"></a>

[Returns the status of the job](#search-status) specified by [Request
ID](#parameter-Request-ID).


<table>
  <thead>
    <tr>
    <th colspan="2">Item</th>
    <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">HTTP Method</td>
      <td><code class="language-plaintext highlighter-rouge">GET</code></td>
    </tr>
    <tr>
      <td colspan="2">URI</td>
      <td>
      <code class="language-plaintext highlighter-rouge">"/blast/"</code> + <a href="#parameter-Request-ID">Request ID</a> + HTTP Parameter
      (example: <code class="language-plaintext highlighter-rouge">"/blast/wabi_blast_1111-1111-1111-11-111-111111?info=status"</code>)</td>
    </tr>
    <tr>
      <td rowspan="2" class="borderbtm">HTTP Parameters</td>
      <td>
      <code class="language-plaintext highlighter-rouge">info</code> (default value = <code class="language-plaintext highlighter-rouge">"status"</code>)</td>
      <td>
      <a href="#parameter-info">Job information type</a> (example: <code class="language-plaintext highlighter-rouge">"status"</code>, <code class="language-plaintext highlighter-rouge">"result"</code>)</td>
    </tr>
    <tr>
      <td>
      <code class="language-plaintext highlighter-rouge">format</code> (default value = <code class="language-plaintext highlighter-rouge">"text"</code>)</td>
      <td>
      <a href="#parameter-format">Response data format</a> (example: <code class="language-plaintext highlighter-rouge">"text"</code>, <code class="language-plaintext highlighter-rouge">"json"</code>)</td>
    </tr>
  </tbody>
</table>

#### Server-Side Processing Flow

  1. Input values are validated on the server side.  
    If an input validation error is found, processing is interrupted,
    and the server returns HTTP status 400 Bad Request.
  2. The server obtains job information corresponding to the specified
    [Request ID](#parameter-Request-ID) and returns the [current
    status](#search-status).  
    HTTP status code 404 is returned if the search retention period has
    expired or if the job information cannot be found.
  3. The server returns the obtained [current job’s
    status](#search-status) using the specified format.  
    However, the server returns HTTP status 404 Not Found if the
    specified format is invalid.

#### Input value validation check performed

<table>
  <tbody>
    <tr>
      <th class="first"><a href="#parameter-Request-ID">requestId</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Required value.</li>
          <li>Values containing any characters other than alphanumeric, <code class="language-plaintext highlighter-rouge">"-"</code>, and <code class="language-plaintext highlighter-rouge">"_"</code> will cause an input validation error.</li>
          <li>Any <a href="#parameter-Request-ID">Request ID</a> that does not exist will cause an input validation error.<br>
            Search results are discarded after a given period; it will be considered to be an input validation error in this case as well.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-format">format</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Required value.</li>
          <li>Causes an input validation error if an undefined value is passed.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-imageId">imageId</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Should not be specified.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-info">info</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Must specify the value <code class="language-plaintext highlighter-rouge">"status"</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### Response Data

In the case of successful completion:
: 
- Returns a "successful” HTTP status code such as 200.
- The field status will contain information corresponding to
  "[current status](#search-status)".
- Other values such as current-time and other request
  information may be included in the response data; however,
  formatting of these values may change in the future.  
  Please use the HTTP status code to determine the success or
  failure of the request.

In the case of failed completion:
: 
- Returns a "client error" HTTP status code such as 400.
- The key called error-messages included in the returned data
  will contain an error message indicating such information as the
  name of the parameter that caused input validation error.
- Other values including cause of the error and other request
  information may be included in the returned data; however,
  formatting of these values may change in the future.  
  Please use the HTTP status code to determine the success or
  failure of the request.

#### Example request and response

Example input values


| HTTP Parameter | nput value |
| -------------- | ---------- |
| format       | "json"   |
| result       | "www"    |
| info         | "status" |



Example response for a successfully completed request

```
HTTP Status 200
1 request-ID: wabi_blast_1111-1111-1111-11-111-111111
2 status: finished
3 current-time: 2013-01-01 12:34:56
4 system-info:
5 stdout
```

```
HTTP Status 200
1{
2        "request-ID": "wabi_blast_1111-1111-1111-11-111-111111",
3        "status": "finished",
4        "current-time": "2013-01-01 12:34:56",
5        "system-info": "nstdout" 
6}
```

```
HTTP Status 200
1<?xml version="1.0" ?>
2<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
3<result>
4  <request-ID>wabi_blast_1111-1111-1111-11-111-111111</request-ID>
5  <status>finished</status>
6  <current-time>2013-01-01 12:34:56</current-time>
7  <system-info>stdout</system-info>
8</result>
```

Example response for a failed request

```
HTTP Status 400
 1{
 2  "status": "illegal-arguments",
 3  "message": "Illegal arguments.",
 4  "requestId": "wabi_blast_1111-1111-1111-11-111-111111",
 5  "format": "json",
 6  "imageId": null,
 7  "info": "status",
 8  "current-time": "2013-01-01 12:34:56",
 9  "error-messages": [
10          "No such data: (requestId)" 
11  ],
12  "error-message": "BAD_REQUEST (null)" 
13}
```

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h4 class="toggle-content-btn"><a href="javascript:void(0)">Example Usage</a></h4>
<div class="accordion-content">Example using the REST client on Java Spring Framework:
    <script src="https://gist.github.com/ddbj-repo/4a1ea26e46bebac37cf595eae77e384a.js"></script>

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

### URI GET /blast/{Request-ID}?info=request (obtain and confirm search criteria) <a name="URI_GET_request"></a>

This will return the search criteria of a specified [Request
ID](#parameter-Request-ID).

<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>&nbsp;</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTTP Method</td>
      <td>&nbsp;</td>
      <td><code class="language-plaintext highlighter-rouge">GET</code></td>
    </tr>
    <tr>
      <td>URI</td>
      <td>&nbsp;</td>
      <td><code class="language-plaintext highlighter-rouge">“/blast/”</code> + <a href="#parameter-Request-ID">Request ID</a> + <code class="language-plaintext highlighter-rouge">“?info=request”</code> + HTTP Parameters (example: <code class="language-plaintext highlighter-rouge">“/blast/wabi_blast_1111-1111-1111-11-111-111111?info=request”</code>)</td>
    </tr>
    <tr>
      <td>HTTP Parameter</td>
      <td><code class="language-plaintext highlighter-rouge">format</code>(default value = <code class="language-plaintext highlighter-rouge">“text”</code>)</td>
      <td><a href="#parameter-format">Response data format</a> (example: <code class="language-plaintext highlighter-rouge">“text”</code>, <code class="language-plaintext highlighter-rouge">“json”</code>)</td>
    </tr>
  </tbody>
</table>

#### Server-Side Processing Flow

  1. Input values are validated on the server side.  
    If an input validation error is found, processing is interrupted,
    and the server returns HTTP status 400 Bad Request.
  2. Information on the job specified by [Request
    ID](#parameter-Request-ID) is retrieved, and the [search
    criteria](#search-criteria) are returned.  
    HTTP status code 404 is returned if the search retention period has
    expired or if the job information cannot be found.
  3. The server returns the current [search criteria](#search-criteria)
    in the specified format.  
    However, the server returns HTTP status code 404 Not Found if the
    specified format is invalid.

#### Input value validation check performed

<table>
  <tbody>
    <tr>
      <th class="first"><a href="#parameter-Request-ID">requestId</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Required value.</li>
          <li>Values containing any characters other than alphanumeric, <code class="language-plaintext highlighter-rouge">"-"</code>, and <code class="language-plaintext highlighter-rouge">"_"</code> will cause an input validation error.</li>
          <li>Specifying a <a href="#parameter-Request-ID">Request ID</a> that does not exist will cause an input validation error.<br>
            Search results are discarded after a given period and requests for these results will also result in an input validation error.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-format">format</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Required value.</li>
          <li>Causes an input validation error if an undefined value is specified.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-imageId">imageId</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Should not be specified.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-info">info</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Must specify the value <code class="language-plaintext highlighter-rouge">"request"</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### Response Data

In the case of successful completion:
: 
- Returns a "successful” HTTP status code such as 200.
- Response data contain each parameter included when the BLAST
search job was initially submitted.
- Please use the HTTP status code to determine the success or
failure of the request.

In case of failed completion:
: 
- Returns a “client error” HTTP status code such as 400.
- The key called error-messages included in the returned data
will contain an error message with information such as the name
of the parameter that caused the input validation error.
- Please use the HTTP status code to determine the success or
failure of the request.

#### Example request and response

Example input values:


| HTTP Parameters | Input values    |
| --------------- | --------------- |
| format        | "requestfile" |
| info          | "request"     |



Example response for a successfully completed request:

```
HTTP Status 200
 1{
 2        "address": "",
 3        "database": "hum",
 4        "datasets": "ddbjall",
 5        "format": "text",
 6        "parameters": " -v 100 -b 100 -e 10 -F F -W 11 ",
 7        "program": "blastn",
 8        "querySequence": ">my query sequence 1nCACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAAnGCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTGnGTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCACn",
 9        "result": "www" 
10}
```

Example response for a failed request:

```
HTTP Status 404
 1{
 2        "Message": "Unexpected error ( Results of your request id have been NOT FOUND.)",
 3        "requestId": "wabi_blast_1111-1111-1111-11-111-111111",
 4        "format": "text",
 5        "imageId": null,
 6        "info": "result",
 7        "current-time": "2013-01-01 12:34:56",
 8        "error-messages": [
 9                "No such data: (requestId)" 
10        ],
11        "error-message": "NOT_FOUND (null)" 
12}
```

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h4 class="toggle-content-btn"><a href="javascript:void(0)">Example Usage</a></h4>
<div class="accordion-content">Example using the REST client on Java Spring Framework:
    <script src="https://gist.github.com/ddbj-repo/d3ff7fbc9a66733ab164f669e4bcb88d.js"></script>

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

### URI GET /blast/{Request-ID}?info=result (retrieve search results) <a name="URI_GET_result"></a>

Returns the search results for a specified [Request ID](#parameter-Request-ID).

<table>
  <thead>
    <tr>
    <th colspan="2">Item</th>
    <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td colspan="2">HTTP Method</td>
    <td><code class="language-plaintext highlighter-rouge">GET</code></td>
    </tr>
    <tr>
    <td colspan="2">URI</td>
    <td>
    <code class="language-plaintext highlighter-rouge">"/blast/"</code> + <a href="#parameter-Request-ID">Request ID</code></a> + <code class="language-plaintext highlighter-rouge">"?info=request"</code> + HTTP Parameters
    (example: <code class="language-plaintext highlighter-rouge">"/blast/wabi_blast_1111-1111-1111-11-111-111111?info=request"</code>)</td>
    </tr>
    <tr>
    <td>HTTP Parameter</td>
    <td>
    <code class="language-plaintext highlighter-rouge">format</code> (default value = <code class="language-plaintext highlighter-rouge">"text"</code>)</td>
    <td>
    <a href="#parameter-format">Response data format</a> (example: <code class="language-plaintext highlighter-rouge">"text"</code>, <code class="language-plaintext highlighter-rouge">"json"</code>)</td>
    </tr>
  </tbody>
</table>

#### Server-Side Processing Flow

  1. Input values are validated on the server side.  
    If an input validation error is found, processing is interrupted,
    and the server returns HTTP status code 400 Bad Request.
  2. Information on the job specified by [Request
    ID](#parameter-Request-ID) is retrieved, and returns the [search
    result](#search-result).  
    HTTP status code 400 or 404 is returned if the search retention
    period has expired or if the search processing has not yet
    completed.
  3. The server returns the [search result](#search-result) using the
    specified format.  
    However, the server returns HTTP status code 404 Not Found if the
    specified format is invalid.

#### Input validation check performed

<table>
  <tbody>
    <tr>
      <th class="first"><a href="#parameter-Request-ID">requestId</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Required value.</li>
          <li>Values containing any characters other than alphanumeric, <code class="language-plaintext highlighter-rouge">"-"</code>, and <code class="language-plaintext highlighter-rouge">"_"</code> will cause an input validation error.</li>
          <li>Specifying a <a href="#parameter-Request-ID">Request ID</a> that does not exist will cause an input validation error.<br>
            Search results are discarded after a given period and requests for these results will also result in an input validation error.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-format">format</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Required value.</li>
          <li>Causes an input validation error if an undefined value is specified.</li>
        </ul>
      </td>
    </tr>
      <tr>
      <th class="first"><a href="#parameter-imageId">imageId</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Should not be specified.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-info">info</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Must specify the value <code class="language-plaintext highlighter-rouge">"result"</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### Response Data

In the case of successful completion:
: 
- Returns a "successful" HTTP status code such as 200.
- Returns the content of the output file generated through the
BLAST search.
- Please use the HTTP status code to determine the success or
failure of the request.

In the case of failed completion:
: 
- Returns a “client error” HTTP status code such as 400.
- The key called error-messages included in the returned data
will contain an error message with information such as the name
of the parameter that caused the input validation error.
- Please use the HTTP status code to determine the success or
failures of the request.

#### Example request and response

Example of input data:

| HTTP Parameters | Input Value |
| --------------- | ----------- |
| format        | "bigfile" |
| info          | "result"  |

Example response for a successfully completed request

```
HTTP Status 200
 1 BLASTN 2.2.25 [Feb-01-2011]
 2 
 3 Reference: Altschul, Stephen F., Thomas L. Madden, Alejandro A. Schaffer,
 4 Jinghui Zhang, Zheng Zhang, Webb Miller, and David J. Lipman (1997),
 5 "Gapped BLAST and PSI-BLAST: a new generation of protein database search
 6 programs",  Nucleic Acids Res. 25:3389-3402.
 7 
 8 Query= AB000095|AB000095.1 Homo sapiens mRNA for hepatocyte growth
 9 factor activator inhibitor, complete cds.
10          (1740 letters)
11 
12 Database: hum
13            572,091 sequences; 5,019,832,159 total letters
14 
15 Searching..................................................done
16 
17                                                                  Score    E
18 Sequences producing significant alignments:                      (bits) Value
19 
20 AB000095|AB000095.1 Homo sapiens mRNA for hepatocyte growth fact...  3449   0.0
21 BC018702|BC018702.1 Homo sapiens serine peptidase inhibitor, Kun...  3435   0.0
22 BC004140|BC004140.1 Homo sapiens serine peptidase inhibitor, Kun...  3190   0.0
23 BT007425|BT007425.1 Homo sapiens serine protease inhibitor, Kuni...  3053   0.0
24 AY358969|AY358969.1 Homo sapiens clone DNA35880 HAI-1 (UNQ223) m...  2145   0.0
25 AY296715|AY296715.1 Homo sapiens hepatocyte growth factor activa...  1984   0.0

(後略)      
```

Example response data when there is an input validation error

```
HTTP Status 400
 1{
 2        "Message": "Error ( Results of your request id have been NOT FOUND, or still running.)",
 3        "requestId": "wabi_blast_1111-1111-1111-11-111-111111",
 4        "format": "text",
 5        "imageId": null,
 6        "info": "result",
 7        "current-time": "2013-01-01 12:34:56",
 8        "error-messages": [
 9                "No such data: (requestId)" 
10        ],
11        "error-message": "NOT_FOUND (null)" 
12}
```

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h4 class="toggle-content-btn"><a href="javascript:void(0)">Usage Example</a></h4>
<div class="accordion-content">Example of the use of the REST client on Java Spring Framework:
    <script src="https://gist.github.com/ddbj-repo/af6f2a4165385224de18cc5968568848.js"></script>

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

### URI GET /blast/{Request-ID}?imageId={Image-ID} (retrieve image data generated from the search result) <a name="URI_GET_imageid">

This method returns the image data generated from the search result
specified by [RequestID](#parameter-Request-ID).

<table>
  <thead>
    <tr>
      <th colspan="2">Item</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">HTTP Method</td>
      <td><code class="language-plaintext highlighter-rouge">GET</code></td>
    </tr>
    <tr>
      <td colspan="2">URI</td>
      <td>
<code class="language-plaintext highlighter-rouge">"/blast/"</code> + <a href="#parameter-Request-ID">RequestID</a> + <code class="language-plaintext highlighter-rouge">"?imageId="</code> + <em>Image ID</em> + HTTP parameters
                (example: <code class="language-plaintext highlighter-rouge">"/blast/wabi_blast_1111-1111-1111-11-111-111111?imageId=1"</code>)</td>
    </tr>
    <tr>
      <td>HTTP Parameters</td>
      <td>
<code class="language-plaintext highlighter-rouge">format</code> (default value = <code class="language-plaintext highlighter-rouge">"text"</code>)</td>
      <td>
<a href="#parameter-format">Response data format</a> (example: <code class="language-plaintext highlighter-rouge">"imagefile"</code>)</td>
    </tr>
  </tbody>
</table>

#### Server-side processing flow

  1. Input values are validated on the server side.  
    If an invalid input value is found, then the processing is
    interrupted and HTTP status 400 Bad Request is returned.
  2. Information about the job corresponding to the specified
    [RequestID](#parameter-Request-ID) is obtained, and the [image
    generated from the BLAST search](#search-image) is returned.  
    HTTP status code 400 or 404 is returned if the job information
    cannot be retrieved due to search retention period having expired or
    due to search job not having completed processing.
  3. The server returns the [image generated from the BLAST
    search](#search-image) in the specified format.  
    However, the server returns HTTP status code 404 Not Found if the
    specified format is invalid.

#### Input validation check performed

<table>
  <tbody>
    <tr>
      <th class="first"><a href="#parameter-Request-ID">requestId</a></th>
      <td class="second">
        <ul class="disc bottom_space">               
          <li>Required value.</li>
          <li>Values containing any characters other than alphanumeric, <code class="language-plaintext highlighter-rouge">"-"</code>, and <code class="language-plaintext highlighter-rouge">"_"</code> will cause an input validation error.</li>
          <li>Specifying a <a href="#parameter-Request-ID">requestId</a> that does not exist will cause an input validation error.<br>
            Search results are discarded after a given period and requests for these results will also result in an input validation error.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-format">format</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Any value other than <code class="language-plaintext highlighter-rouge">"imagefile"</code> will result in an input error.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-imageId">imageId</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Any value other than a numeric value will result in an input error.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="first"><a href="#parameter-info">info</a></th>
      <td class="second">
        <ul class="disc bottom_space">
          <li>Returns an input error if an undefined value is specified.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### Response Data

In the case of successful completion:
: 
- Returns a "successful” HTTP status code such as 200.
- Returns the image data generated from the BLAST search.
- Please use the HTTP status code to determine the success or
failure of the request.

In the case of failed completion:
: 
- Returns a "client error" HTTP status code such as 400.
- The key called error-messages included in the returned data
will contain an error message with information such as the name
of the parameter that caused the input validation error.
- Please use the HTTP status code to determine the success or
failure of the request.

#### Example request and response

Example input values

| HTTP Parameter | Input Value |
| ----------- | ------------- |
| `imageId`   | `"1"`         |
| `format`    | `"imagefile"` |
| `info`      | `""`          |

Example response for a successfully completed request

```
HTTP Status 200
(Image Data)
```

Example response for a failed request

```
HTTP Status 404
 1 {
 2        "Message": "Error ( Blast image file of your request id have been NOT FOUND, or still running.)",
 3         "requestId": "wabi_blast_1111-1111-1111-11-111-111111",
 4         "format": "text",
 5         "imageId": null,
 6         "info": "result",
 7         "current-time": "2013-01-01 12:34:56",
 8         "error-messages": [
 9                 "No such data: (requestId)" 
10         ],
11         "error-message": "NOT_FOUND (null)" 
12 }
```

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h4 class="toggle-content-btn"><a href="javascript:void(0)">Example Usage</a></h4>
<div class="accordion-content">Example using HttpURLConnection with Java:
    <script src="https://gist.github.com/ddbj-repo/bd58a6ca09c2d380d5ceafd4905a0e2e.js"></script>

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

### URI GET /blast/help/{Help-Command} (View help information) <a name="URI_GET_help"></a>

Returns the help information of WABI BLAST.

<table>
  <thead>
    <tr>
    <th colspan="2">Item</th>
    <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td colspan="2">HTTP Method</td>
    <td><code class="language-plaintext highlighter-rouge">GET</code></td>
    </tr>
    <tr>
    <td colspan="2">URI</td>
    <td>
    <code class="language-plaintext highlighter-rouge">"/blast/help/"</code> + Help-Command + HTTP Parameter
    (example: <code class="language-plaintext highlighter-rouge">"/blast/help/list_program?format=json"</code>)</td>
    </tr>
    <tr>
    <td rowspan="2" class="borderbtm">HTTP Parameters</td>
    <td>
    <code class="language-plaintext highlighter-rouge">format</code> (default value = <code class="language-plaintext highlighter-rouge">"text"</code>)</td>
    <td>
    <a href="#parameter-format">Response data format</a> (example: <code class="language-plaintext highlighter-rouge">"text"</code>, <code class="language-plaintext highlighter-rouge">"json"</code>)</td>
    </tr>
    <tr>
    <td><code class="language-plaintext highlighter-rouge">program</code></td>
    <td>
    <a href="#parameter-program">BLAST program name</a> (example: <code class="language-plaintext highlighter-rouge">"blastn"</code>)</td>
    </tr>
  </tbody>
</table>

#### Help-Command

<table>
  <thead>
    <tr>
    <th>Help-Commands</th>
    <th>Other HTTP Parameters</th>
    <th>Help information that can be referenced</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2"><code class="language-plaintext highlighter-rouge">list_datasets</code></td>
      <td>List of defined values for the <a href="#parameter-datasets">datasets</a> parameter</td>
    </tr>
    <tr>
      <td colspan="2"><code class="language-plaintext highlighter-rouge">list_database</code></td>
      <td>List of defined values for the <a href="#parameter-database">database</a> parameter</td>
    </tr>
    <tr>
      <td colspan="2"><code class="language-plaintext highlighter-rouge">list_program</code></td>
      <td>List of defined parameters for the <a href="#parameter-program">BLAST program</a> parameter</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">list_parameters</code></td>
      <td>
<code class="language-plaintext highlighter-rouge">program</code> = <a href="#parameter-program">BLAST program</a>
</td>
      <td>List of defined <a href="#parameter-parameters">optional parameters for the specified BLAST program</a>
</td>
    </tr>
    <tr>
      <td colspan="2"><code class="language-plaintext highlighter-rouge">list_format</code></td>
      <td>List of defined values for the <a href="#parameter-format">response data</a> parameter</td>
    </tr>
    <tr>
      <td colspan="2"><code class="language-plaintext highlighter-rouge">list_result</code></td>
      <td>List of defined values for the <a href="#parameter-result">result parameter</a>
</td>
    </tr>
    <tr>
      <td colspan="2"><code class="language-plaintext highlighter-rouge">list_info</code></td>
      <td>パList of defined parameters for <a href="#parameter-info">job information to be retrieved</a>
</td>
    </tr>
  </tbody>
</table>

#### Response data

In the case of successful completion:
: 
- Returns the requested help information

In case of failed completion:
: 
- Returns the list of valid Help-Commands and other information.

#### Example request and response

Example input values:

| Help-Command and other parameters | nput Values     |
| --------------------------------- | --------------- |
| Help-Command                    | "list_result" |
| format                          | "json"        |

Example response for a successfully completed request:

```
1 {
2     "result": [
3         "www",
4         "mail" 
5     ]
6 }
```

Example response for a failed request:

```
 1 {
 2     "help_commands": [
 3         "list_datasets",
 4         "list_database",
 5         "list_program",
 6         "list_parameters",
 7         "list_format",
 8         "list_result",
 9         "list_info" 
10     ],
11     "format": [
12         "text",
13         "json",
14         "xml" 
15     ]
16 }
```

{::options parse_block_html="true" /}
<div class="accordion-menu">
  <h4 class="toggle-content-btn"><a href="javascript:void(0)">Example Usage</a></h4>
<div class="accordion-content">Example of the use of the REST client on Java Spring Framework:
    <script src="https://gist.github.com/ddbj-repo/324515b540e438c23e5589dfa40f9aed.js"></script>

[« Close](javascript:void(0)){: .close-content-btn}
</div>
</div>

## WABI BLAST Parameters

### requestId：Request ID <a name="parameter-Request-ID"></a>

A string that is used to uniquely identify a [BLAST search
job](#search-job)　from those registered in WABI.  
WABI [returns Request ID as part of the response data](#uripost-example)
when the job is registered in the queue: this should be saved by the
program that uses WABI.

Request ID would be needed for performing the following tasks:

  - [Confirming the status of a search job](#URI_GET_status)
  - [Confirming the search criteria](#URI_GET_request)
  - [Viewing search results](#URI_GET_result)

Example Request ID:

```
wabi_blast_1111-1111-1111-11-111-111111
```

Also refer to: [BLAST Help Request ID](/blast-help-e.html#request%20id)


### querySequence： Query sequence data <a name="parameter-querySequence"></a>

  - Query sequence must be in FASTA format.
  - In order to assign a name to a sequence, include a line starting
    with ">" before each sequence.
  - If there are multiple sequences to be queried, then sequence names
    are mandatory in order to distinguish between the sequences
    (multi-FASTA format).  
    <span class="red">Note: Increasing the number of sequences will not
    increase the degree of parallel processing. We recommend reducing
    the number of sequences searched using the web API, considering the
    load balancing that is applied by the job management engine.</span>
  - Sequence name is not required if you only have one sequence to
    search.

Example sequence in FASTA format

```
>my query sequence 1
CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC
```

Example of multiple sequences (multi-FASTA format)

```
>my query sequence 1
CACCCTCTCTTCACTGGAAAGGACACCATGAGCACGGAAAGCATGATCCAGGACGTGGAA
GCTGGCCGAGGAGGCGCTCCCCAGGAAGACAGCAGGGCCCCAGGGCTCCAGGCGGTGCTG
GTTCCTCAGCCTCTTCTCCTTCCTGCTCGTGGCAGGCGCCGCCAC
>my query sequence 2
GGCCAGGGCACCCAGTCTGAGAACAGCTGCACCCGCTTCCCAGGCAACCTGCCTCACATG
CTTCGAGACCTCCGAGATGCCTTCAGCAGAGTGAAGACTTTCTTTCAAATGAAGGATCAG
CTGGACAACATATTGTTAAAGGAGTCCTTGCTGGAGGACTTTAAG
>my query sequence 3
ATGGGTCTCACCTCCCAACTGCTTCCCCCTCTGTTCTTCCTGCTAGCATGTGCCGGCAAC
TTTGCCCACGGACACAACTGCCATATCGCCTTACGGGAGATCATCGAAACTCTGAACAGC
CTCACAGAGCAGAAGACTCTGTGCACCAAGTTGACCATAACGGAC
```

{::options parse_block_html="true" /}
<div class="attention red">
Valid search results may not be obtained with very long sequences or if
there are too many sequences for the following reasons.  
In such cases, please try reducing the number of query sequences or
making sequences shorter.

  - Search may end abnormally due to memory running out.
  - Search may time out due to the search taking too long.
</div>

Also refer to: [BLAST Help Query name, Query sequence](/blast-help-e.html#query)


### datasets：Datasets <a name="parameter-datasets"></a>

Datasets are available to assist in completing the query form on the web
interface, but they are not currently used in WABI.

Valid input values that can be specified for datasets and their
respective meanings are explained below.  
Note: Please use the help API [GET
/blast/help/{Help-Command}](#URI_GET_help) to reference the most
up-to-date information.


| Dataset value    | Explanation                                        |
| ---------------- | -------------------------------------------------- |
| `ddbjall`        | DDBJ ALL (DDBJ periodical release + daily updates) |
| `ddbjnew`        | DDBJ New (DDBJ daily updates)                      |
| `16S_rRNA`       | 16S rRNA (Prokaryotes)                             |
| `uniprot_all`    | UniProt (Swiss-Prot + TrEMBL)                      |
| `uniprot_sprot`  | UniProt (Swiss-Prot)                               |
| `uniprot_trembl` | UniProt (TrEMBL)                                   |
| `patent_protein` | Patent                                             |
| `dadall`         | DAD (periodical release + daily updates)           |
| `dadnew`         | DAD (daily updates)                                |
| `refseq_na`      | RefSeq NA                                          |
| `refseq_aa`      | RefSeq AA                                          |

Also refer to: [BLAST HELP Nucleotide (DATABASE, DIVISION)](/blast-help-e.html#nucleotide)


### database：Database <a name="parameter-database"></a>

#### Nucleotide Sequence Database

Example nucleotide sequence database values and their corresponding
explanations are listed in the table below.  
Note: Please use the help API [GET
/blast/help/{Help-Command}](#URI_GET_help) to reference the most
recently updated information.

|  Explanation  |    |  Database value  |
| ---- | ---- | ---- |
| DDBJ ALL | DDBJ periodical release + daily updates | (Refer to table below) |
| DDBJ New | DDBJ daily updates | (Add prefix "new_" to the values below) |
| 16S rRNA | 16S rRNA from DDBJ periodical release | 16S_rRNA |
| RefSeq NA | RefSeq (Genomics + RNA) | (Refer to table below) |

DDBJ ALL, DDBJ NEW Database value

|  Standard divisions  |    |    |
| ---- | ---- | ---- |
|  `hum`, `new_hum`  | Human |  human  |
|  `pri`, `new_pri`  |  Primates  |  primates other than human  |
|  `rod`, `new_rod`  |  Rodents  |  rodents  |
|  `mam`, `new_mam`  |  Mammals  |  mammals other than human, primates and rodents  |
|  `vrt`, `new_vrt`  |  Vertebrates  |  vertebrates other than human, primates, rodents and mammals  |
|  `inv`, `new_inv`  |  Invertebrates  |  invertebrates  |
|  `pln`, `new_pln`  |  Plants  |  plants  |
|  `bct`, `new_bct`  |  Bacteria  |  bacteria  |
|  `vrl`, `new_vrl`  |  Viruses  |  viruses  |
|  `phg`, `new_phg`  |  Phages  |  phages  |
|  `syn`, `new_syn`  |  Synthetic DNAs  |  synthetic DNAs (SYN)  |
|  `env`, `new_env`  |  ENV  |  environmental samples(environmental samples)  |

|  High throughput divisions  |    |    |
| ---- | ---- | ---- |
|  `htc`, `new_htc`  |  HTC  |  High Throughput cDNAs  |
|  `htg`, `new_htg`  |  HTG  |  High Throughput Genomic sequences  |
|  `tsa`, `new_tsa`  |  TSA  |  Transcriptome Shotgun Assembly  |

|  EST divisions  |    |    |
| ---- | ---- | ---- |
|  `est_atha`, `new_est_atha`  |  A.thaliana  |  *Arabidopsis thaliana* (thale cress)  |
|  `est_btra`, `new_est_btra`  |  B.taurus  |  *Bos taurus* (cattle)  |
|  `est_cele`, `new_est_cele`  |  C.elegans  |  *Caenorhabditis elegans* (nematode worm)  |
|  `est_crei`, `new_est_crei`  |  C.reinhardtii  |  *Chlamydomonas reinhardtii* (Chlamydomonas:green algae)  |
|  `est_cint`, `new_est_cint`  |  C.intestinalis  |  *Ciona intestinalis* (vase tunicate)  |
|  `est_drer`, `new_est_drer`  |  D.rerio  |  *Danio rerio* (zebrafish)  |
|  `est_ddis`, `new_est_ddis`  |  D.discoideum  |  *Dictyostelium discoideum* (soil-living amoeba)  |
|  `est_dmel`, `new_est_dmel`  |  D.melanogaster  |  *D.melanogaster* (fruit fly)  |
|  `est_ggal`, `new_est_ggal`  |  G.gallus  |  *Gallus gallus* (chicken)  |
|  `est_gmax`, `new_est_gmax`  |  G.max  |  *Glycine max* (soybean)  |
|  `est_hum`, `new_est_hum`  |  H.sapiens  |  *Homo sapiens* (human)  |
|  `est_hvul`, `new_est_hvul`  |  H.vulgare  |  *Hordeum vulgare* (Barley) (incl. subspecies)  |
|  `est_mtru`, `new_est_mtru`  |  M.truncatula  |  *Medicago truncatula* (Barrel Medic) (incl. mixed library)  |
|  `est_mous`, `new_est_mous`  |  M.musculus  |  *Mus musculus* (Mouse)  |
|  `est_osat`, `new_est_osat`  |  O.sativa  |  *Oryza sativa* (incl. subspecies rank)  |
|  `est_rnor`, `new_est_rnor`  |  R.norvegicus  |  *Rattus norvegicus* (Rat) (incl. Rattus sp.)  |
|  `est_slyc`, `new_est_slyc`  |  S.lycopersicum  |  *Solanum lycopersicum* (tomato)  |
|  `est_taes`, `new_est_taes`  |  T.aestivum  |  *Triticum aestivum* (bread wheat)  |
|  `est_xlae`, `new_est_xlae`  |  X.laevis  |  *Xenopus laevis* (african clawed frog)  |
|  `est_xtro`, `new_est_xtro`  |  X.tropicalis  |  *Xenopus tropicalis* (western clawed frog)  |
|  `est_zmay`, `new_est_zmay`  |  Z.mays  |  *Zea mays* (maize)  |
|  `est_rest`, `new_est_rest`  |  Others  |  Others  |

|  Others  |    |    |
| ---- | ---- | ---- |
|  `pat`, `new_pat`  |  Patent  |  patent (PAT)  |
|  `una`, `new_una`  |  Unannotated Seq  |  unannotated sequences (UNA)  |
|  `gss`, `new_gss`  |  GSS  |  genome survey sequences  |
|  `sts`, `new_sts`  |  STS  |  sequence tagged sites  |

Refseq NA Database value

|  RefSeq NA  |    |
| ---- | ---- |
| `refseq-genomic-fungi`, `refseq-rna-fungi` | Fungi |
| `refseq-genomic-invertebrate`, `refseq-rna-invertebrate` | Invertebrate |
| `refseq-genomic-microbial`, `refseq-rna-microbial` | Microbial |
| `refseq-genomic-mitochondrion`, `refseq-rna-mitochondrion` | Mitochondrion |
| `refseq-genomic-plant`, `refseq-rna-plant` | Plant |
| `refseq-genomic-plasmid`, `refseq-rna-plasmid` | Plasmid |
| `refseq-genomic-plastid`, `refseq-rna-plastid` | Plastid |
| `refseq-genomic-protozoa`, `refseq-rna-protozoa` | Protozoa |
| `refseq-genomic-vertebrate_mammalian`, `refseq-rna-vertebrate_mammalian` | Vertebrate Mammalian |
| `refseq-genomic-vertebrate_other`, `refseq-rna-vertebrate_other` | Vertebrate Other |
| `refseq-genomic-viral`, `refseq-rna-viral` | Viral |
| `refseq-genomic` | RefSeq Genomic (ALL) Periodical Release |
| `refseq-rna` | RefSeq RNA (ALL) Periodical Release |
| `refseq-na-daily` | RefSeq Daily Updates |
| `refseq-na-all` | RefSeq ALL (Periodical Release + Daily Updates) |
| `refseq-model-rna-B_taurus` | B. taurus |
| `refseq-model-rna-D_rerio` | D. rerio |
| `refseq-model-rna-H_sapiens`, refseq-model-genomic-H_sapiens | H. sapiens |
| `refseq-model-rna-M_musculus` | M. musculus |
| `refseq-model-rna-R_norvegicus` | R. norvegicus |
| `refseq-model-rna-X_tropicalis` | X. tropicalis |

#### Amino Acid Sequence Databases

Example amino acid sequence database values and their corresponding
explanations are listed in the table below.

|  Explanation  |    |  Database value  |
| ---- | ---- | ---- |
| UniProt (Swiss-Prot + TrEMBL) | Swiss-Prot + TrEMBL | `uniprot_all` |
| UniProt (Swiss-Prot) | Swiss-Prot | `uniprot_sprot` |
| UniProt (TrEMBL) | TrEMBL | `uniprot_trembl` |
| Patent | JPO，EPO，USPTO，KIPO | `jpop`, `epop`, `usptop`, `kipop` |
| DAD ALL | periodical release + daily updates | (Refer to table below) |
| DAD NEW | daily updates |(Refer to table below) |
| RefSeq AA | RefSeq (Protein) | (Refer to table below) |

DAD ALL, DAD NEW Database value

|  Standard divisions  |    |    |
| ---- | ---- | ---- |
|  `dad_hum`, `dad_new_hum`  |  Human  |  human  |
|  `dad_pri`, `dad_new_pri`  |  Primates  |  primates other than human |
|  `dad_rod`, `dad_new_rod`  |  Rodents  |  rodents  |
|  `dad_mam`, `dad_new_mam`  |  Mammals  |  mammals other than human，primates and rodents  |
|  `dad_vrt`, `dad_new_vrt`  |  Vertebrates  |  vertebrates other than human，primates, rodents and mammals |
|  `dad_inv`, `dad_new_inv`  |  Invertebrates  |  invertebrates  |
|  `dad_pln`, `dad_new_pln`  |  Plants  |  plants  |
|  `dad_bct`, `dad_new_bct`  |  Bacteria  |  bacteria  |
|  `dad_vrl`, `dad_new_vrl`  |  Viruses  |  viruses  |
|  `dad_phg`, `dad_new_phg`  |  Phages  |  phages  |
|  `dad_syn`, `dad_new_syn`  |  Synthetic DNAs  |  synthetic DNAs (SYN)  |
|  `dad_env`, `dad_new_env`  |  General  |  environmental samples  |

|  High throughput divisions  |    |    |
| ---- | ---- | ---- |
|  `dad_htc`, `dad_new_htc`  |  HTC  |  High Throughput cDNAs  |
|  `dad_htg`, `dad_new_htg`  |  HTG  |  High Throughput Genomic sequences  |
|  `dad_tsa`, `dad_new_tsa`  |  TSA  |  Transcriptome Shotgun Assembly  |

|  EST divisions  |    |    |
| ---- | ---- | ---- |
|  `dad_est_atha`, `dad_new_est_atha`  |  A.thaliana  |  *Arabidopsis thaliana* (thale cress)  |
|  `dad_est_btra`, `dad_new_est_btra` |  B.taurus  |  *Bos taurus* (cattle)  |
|  `dad_est_cele`, `dad_new_est_cele`  |  C.elegans  |  *Caenorhabditis elegans* (nematode worm)  |
|  `dad_est_crei`, `dad_new_est_crei`  |  C.reinhardtii  |  *Chlamydomonas reinhardtii* (Chlamydomonas:green algae)  |
|  `dad_est_cint`, `dad_new_est_cint`  |  C.intestinalis  |  *Ciona intestinalis* (vase tunicate)  |
|  `dad_est_drer`, `dad_new_est_drer`  |  D.rerio  |  *Danio rerio* (zebrafish)  |
|  `dad_est_ddis`, `dad_new_est_ddis`  |  D.discoideum  |  *Dictyostelium discoideum* (soil-living amoeba)  |
|  `dad_est_dmel`, `dad_new_est_dmel`  |  D.melanogaster  |  *D.melanogaster* (fruit fly)  |
|  `dad_est_ggal`, `dad_new_est_ggal`  |  G.gallus  |  *Gallus gallus* (chicken)  |
|  `dad_est_gmax`, `dad_new_est_gmax`  |  G.max  |  *Glycine max* (soybean)  |
|  `dad_est_hum`, `dad_new_est_hum`  |  H.sapiens  |  *Homo sapiens* (human)  |
|  `dad_est_hvul`, `dad_new_est_hvul`  |  H.vulgare  |  *Hordeum vulgare* (Barley) (incl. subspecies)  |
|  `dad_est_mtru`, `dad_new_est_mtru`  |  M.truncatula  |  *Medicago truncatula* (Barrel Medic) (incl. mixed library)  |
|  `dad_est_mous`, `dad_new_est_mous`  |  M.musculus  |  *Mus musculus* (Mouse)  |
|  `dad_est_osat`, `dad_new_est_osat`  |  O.sativa  |  *Oryza sativa* (incl. subspecies rank)  |
|  `dad_est_rnor`, `dad_new_est_rnor`  |  R.norvegicus  |  *Rattus norvegicus* (Rat) (incl. Rattus sp.)  |
|  `dad_est_slyc`, `dad_new_est_slyc`  |  S.lycopersicum  |  *Solanum lycopersicum* (tomato)  |
|  `dad_est_taes`, `dad_new_est_taes`  |  T.aestivum  |  *Triticum aestivum* (bread wheat)  |
|  `dad_est_xlae`, `dad_new_est_xlae`  |  X.laevis  |  *Xenopus laevis* (western clawed frog)  |
|  `dad_est_xtro`, `dad_new_est_xtro`  |  X.tropicalis  |  *Xenopus tropicalis* (african clawed frog)  |
|  `dad_est_zmay`, `dad_new_est_zmay`  |  Z.mays  |  *Zea mays* (maize)  |
|  `dad_est_rest`, `dad_new_est_rest`  |  Others  |  Others  |

|  Others  |    |    |
| ---- | ---- | ---- |
|  `dad_pat`, `dad_new_pat`  |  Patent  |  patent (PAT)  |
|  `dad_una`, `dad_new_una`  |  Unannotated Seq  |  unannotated sequences (UNA)  |
|  `dad_gss`, `dad_new_gss`  |  GSS  |  genome survey sequences  |
|  `dad_sts`, `dad_new_sts`  |  STS  |  sequence tagged sites  |

Refseq AA Database value

|  RefSeq AA  |    |    |
| ---- | ---- | ---- |
| `refseq-protein-fungi` | Fungi |
| `refseq-protein-invertebrate` | Invertebrate |
| `refseq-protein-microbial` | Microbial |
| `refseq-protein-mitochondrion` | Mitochondrion |
| `refseq-protein-plant` | Plant |
| `refseq-protein-plasmid` | Plasmid |
| `refseq-protein-plastid` | Plastid |
| `refseq-protein-protozoa` | Protozoa |
| `refseq-protein-vertebrate_mammalian` | Vertebrate Mammalian |
| `refseq-protein-vertebrate_other` | Vertebrate Other |
| `refseq-protein-viral` | Viral |
| `refseq-protein` | RefSeq Protein (ALL) Periodical Release | |
| `refseq-aa-daily` | RefSeq Protein Daily Updates |
| `refseq-aa-all` | RefSeq Protein ALL (Periodical Release + Daily Updates) |
| `refseq-model-protein-B_taurus` | B. taurus |
| `refseq-model-protein-D_rerio` | D. rerio |
| `refseq-model-protein-H_sapiens` | H. sapiens |
| `refseq-model-protein-M_musculus` | M. musculus |
| `refseq-model-protein-R_norvegicus` | R. norvegicus |
| `refseq-model-protein-X_tropicalis` | X. tropicalis |

Also refer to: [BLAST HELP Nucleotide (DATABASE, DIVISION)](/blast-help-e.html#nucleotide)

### program：BLAST Program <a name="parameter-program"></a>

You can choose from the following BLAST programs depending on the
analysis being performed.  
Note: Please use the help API [GET
/blast/help/{Help-Command}](#URI_GET_help) to reference the most
recently updated information.


|  BLAST Program  |  query  |  Data Base  |  Explanation  |
| ---- | ---- | ---- | ---- |
| megablast | nucleotide | nucleotide | Aligning your nucleotide sequence with nucleotide sequence database.<br>When you want to perform a homology search with long length of nucleotide sequence, results are provided faster than blastn program. |
| blastn | nucleotide | nucleotide | Aligning your nucleotide sequence with nucleotide sequence database. |
| tblastn | amino acid | nucleotide | Aligning your amino acid sequence with nucleotide sequence database by translating database sequences taking into account all six possible open reading frames. |
| tblastx | nucleotide | nucleotide | Aligning your nucleotide sequence with nucleotide sequence database by translating both sequences taking into account all six possible open reading frames. |
| blastp | amino acid | amino acid | Aligning your amino acid sequence with amino acid seque nce database. |
| blastx | nucleotide | amino acid | Aligning your nucleotide sequence with amino acid sequence database by translating your sequence taking into account all six possible open reading frames. |

Also refer to: [BLAST HELP Program](/blast-help-e.html#program)

### parameters：BLAST program options　<a name="parameter-parameters"></a>

BLAST program options that can be specified are as follows:  
Note: Please use the help API [GET
/blast/help/{Help-Command}](#URI_GET_help) to reference the most
recently updated information.

Combinations of these options can be specified with corresponding values
separated by spaces.

{::options parse_block_html="true" /}
<table>
  <thead>
    <tr>
      <th>Options</th>
      <th>BLAST Program</th>
      <th>Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-A</code>　<em>N</em></td>
      <td>All programs</td>
      <td>Multiple Hits window size; generally defaults to 0 (for single-hit extensions), but defaults to 40 when using discontiguous templates.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-B</code>　<em>N</em></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Number of concatenated queries, in blastn or tblastn mode</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-C</code>　<em>X</em></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Use composition-based statistics for blastp or tblastn:<br>
      T, t, D, or d<br>
      Default (equivalent to 1 for blast2 and blastall_old and to 2 for blastall and blastcl3)<br>
      0, F, or f<br>
      No composition-based statistics<br>
      1 Composition-based statistics as in NAR 29:2994-3005, 2001<br>
      2 Composition-based score adjustment as in Bioinformatics 21:902-911, 2005, conditioned on sequence properties<br>
      3 Composition-based score adjustment as in Bioinformatics 21:902-911, 2005, unconditionally<br>
      When enabling statistics in blastall, blastall_old, or blastcl3 (i.e., not blast2), appending u (case-insensitive) to the mode enables use of unified p-values combining alignment and compositional p-values in round 1 only.</td>
    </tr>
    <tr>
      <td rowspan="2"><code class="language-plaintext highlighter-rouge">-D　</code><em>N</em></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Translate sequences in the database according to genetic code N in /usr/share/ncbi/data/gc.prt (default is 1; only applies to tblast*)</td>
    </tr>
    <tr>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Type of output:<br>
      0 alignment endpoints and score<br>
      1 all ungapped segments endpoints<br>
      2 traditional BLAST output (default)<br>
      3 tab-delimited one line format<br>
      4 incremental text ASN.1<br>
      5 incremental binary ASN.1</td>
    </tr>
    <tr>
      <td rowspan="2"><code class="language-plaintext highlighter-rouge">-E　</code><em>N</em></td>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Extending a gap costs N (-1 invokes default behavior)</td>
    </tr>
    <tr>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Extending a gap costs N (-1 invokes default behavior: non-affine if greedy, 2 otherwise)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-F</code><em>str</em></td>
      <td>All programs</td>
      <td>Filter options for DUST or SEG; defaults to T for bl2seq, blast2, blastall, blastall_old, blastcl3, and <code class="language-plaintext highlighter-rouge">megablast</code>, and to F for blastpgp, impala, and rpsblast.</td>
    </tr>
    <tr>
      <td rowspan="2"><code class="language-plaintext highlighter-rouge">-G　</code><em>N</em></td>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Opening a gap costs N (-1 invokes default behavior)</td>
    </tr>
    <tr>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Opening a gap costs N (-1 invokes default behavior: non-affine if greedy, 5 if using dynamic programming)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-H</code><em>N</em></td>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Maximal number of HSPs to save per database sequence (default is 0, unlimited)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-I</code></td>
      <td>All programs</td>
      <td>Show GIs in deflines</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-J</code></td>
      <td>All programs</td>
      <td>Believe the query defline</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-K</code><em>N</em></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Number of best hits from a region to keep.<br>
      Off by default.  If used a value of 100 is recommended.<br>
      Very high values of -v or -b are also suggested.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-L</code><em>start, stop</em></td>
      <td>All programs</td>
      <td>Location on query sequence (for rpsblast, only valid in blastp mode)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-M</code><em>str</em></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Use matrix str (default = BLOSUM62)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-M</code><em>N</em></td>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Maximal total length of queries for a single search (default = 5000000)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-N</code><em>N</em></td>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Type of a discontiguous word template:<br>
      0 coding (default)<br>
      1 optimal<br>
      2 two simultaneous</td>
    </tr>
    <tr>
      <td rowspan="2"><code class="language-plaintext highlighter-rouge">-P　</code><em>N</em></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Set to 1 for single-hit mode or 0 for multiple-hit mode (default).<br>
      Does not apply to blastn.</td>
    </tr>
    <tr>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Maximal number of positions for a hash value (set to 0 [default] to ignore)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-Q</code><em>N</em></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Translate query according to genetic code N in /usr/share/ncbi/data/gc.prt (default is 1)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-R</code></td>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Report the log information at the end of output</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-S</code><em>N</em></td>
      <td>All programs</td>
      <td>Query strands to search against database for blastn, blastx, tblastx:<br>
      1 top<br>
      2 bottom<br>
      3 both (default)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-T</code></td>
      <td>All programs</td>
      <td>Produce HTML output</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-U</code></td>
      <td>All programs</td>
      <td>Use lower case filtering for the query sequence</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-V</code></td>
      <td>All programs</td>
      <td>Force use of legacy engine</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-W</code><em>N</em></td>
      <td>All programs</td>
      <td>Use words of size N (length of best perfect match; zero invokes default behavior, except with <code class="language-plaintext highlighter-rouge">megablast</code>, which defaults to 28, and blastpgp, which defaults to 3.  The default values for the other commands vary with "program": 11 for blastn, 28 for <code class="language-plaintext highlighter-rouge">megablast</code>, and 3 for everything else.)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-X</code><em>N</em></td>
      <td>All programs</td>
      <td>X dropoff value for gapped alignment (in bits) (zero invokes default behavior, except with <code class="language-plaintext highlighter-rouge">megablast</code>, which defaults to 20, and rpsblast and seedtop, which default to 15. The default values for the other commands vary with "program": 30 for blastn, 20 for <code class="language-plaintext highlighter-rouge">megablast</code>, 0 for tblastx, and 15 for everything else.)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-Y</code><em>X</em></td>
      <td>All programs</td>
      <td>Effective length of the search space (use zero for the real size)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-Z</code><em>N</em></td>
      <td>All programs</td>
      <td>X dropoff value for final [dynamic programming?] gapped alignment in bits (default is 100 for blastn and <code class="language-plaintext highlighter-rouge">megablast</code>, 0 for tblastx, 25 for others)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-b</code><em>N</em></td>
      <td>All programs</td>
      <td>Number of database sequences to show alignments for (B) (default is 250)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-e</code><em>X</em></td>
      <td></td>
      <td>Expectation value (E) (default = 10.0)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-f</code><em>X</em></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Threshold for extending hits, default if zero: 0 for blastn and <code class="language-plaintext highlighter-rouge">megablast</code>, 11 for blastp, 12 for blastx, and 13 for tblasn and tblastx.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-f</code></td>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Show full IDs in the output (default: only GIs or accessions)</td>
    </tr>
    <tr>
      <td rowspan="2"><code class="language-plaintext highlighter-rouge">-g　</code><em>F</em></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Do not perform gapped alignment (N/A for tblastx)</td>
    </tr>
    <tr>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Make discontiguous <code class="language-plaintext highlighter-rouge">megablast</code> generate words for every base of the database (mandatory with the current BLAST engine)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-l</code><em>str</em></td>
      <td>All programs</td>
      <td>Restrict search of database to list of GI's [String]</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-m</code><em>N</em></td>
      <td>All programs</td>
      <td>alignment view options:<br>
      0 pairwise (default)<br>
      1 query-anchored showing identities<br>
      2 query-anchored, no identities<br>
      3 flat query-anchored, show identities<br>
      4 flat query-anchored, no identities<br>
      5 query-anchored, no identities and blunt ends<br>
      6 flat query-anchored, no identities and blunt ends<br>
      7 XML Blast output (not available for impala)<br>
      8 tabular (not available for impala)<br>
      9 tabular with comment lines (not available for impala)<br>
      10 ASN.1 text (not available for impala or rpsblast)<br>
      11 ASN.1 binary (not available for impala or rpsblast)</td>
    </tr>
    <tr>
      <td rowspan="2"><code class="language-plaintext highlighter-rouge">-n</code></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td><code class="language-plaintext highlighter-rouge">megablast</code> search</td>
    </tr>
      <tr>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Use non-greedy (dynamic programming) extension for affine gap scores</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-p</code><em>X</em></td>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Identity percentage cut-off (default = 0)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-q</code><em>N</em></td>
      <td>All programs</td>
      <td>Penalty for a nucleotide mismatch (blastn only) (default = -10 for seedtop, -3 for everything else)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-r</code><em>N</em></td>
      <td>All programs</td>
      <td>Reward for a nucleotide match (blastn only) (default = 10 for seedtop, -10 for everything else)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-s</code></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Compute locally optimal Smith-Waterman alignments.<br>
      For blastall, blastall_old, and blastcl3, this is only available in gapped tblastn mode.</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-s</code><em>N</em></td>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Minimal hit score to report (0 for default behavior)</td>
    </tr>
    <tr>
      <td rowspan="2"><code class="language-plaintext highlighter-rouge">-t　</code><em>N</em></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Length of a discontiguous word template (the largest intron allowed in a translated nucleotide sequence when linking multiple distinct assignments; default = 0; negative values disable linking for blastall, blastall_old, and blastcl3.)</td>
    </tr>
    <tr>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Length of a discontiguous word template (contiguous word if 0 [default])</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-v</code><em>N</em></td>
      <td>All programs</td>
      <td>Number of one-line descriptions to show (V) (default = 500)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-w</code><em>N</em></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>Frame shift penalty (OOF algorithm for blastx)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-y</code><em>X</em></td>
      <td>All programs except "<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>X dropoff for ungapped extensions in bits (0.0 invokes default behavior: 20 for blastn, 10 for <code class="language-plaintext highlighter-rouge">megablast</code>, and 7 for all others.)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-y</code><em>N</em></td>
      <td>"<code class="language-plaintext highlighter-rouge">megablast</code>"</td>
      <td>X dropoff value for ungapped extension (default is 10)</td>
    </tr>
    <tr>
      <td><code class="language-plaintext highlighter-rouge">-z</code><em>N</em></td>
      <td>All programs</td>
      <td>Effective length of the database (use zero for the real size)</td>
    </tr>
  </tbody>
</table>


Example BLAST program option:

```
-v 100 -b 100 -e 10 -F F -W 11
```

Also refer to: [BLAST HELP Optional Parameters](/blast-help-e.html#parameters)


### format：Response data format <a name="parameter-format"></a>

You can specify the following options to select the WABI response data
format.  
Note: Please use the help API [GET /blast/help/{Help-Command} to
reference the most recently updated information.](#URI_GET_help)


| Response data format | Explanation                                                                               | Media Type                        |
| -------------------- | ----------------------------------------------------------------------------------------- | --------------------------------- |
| `text`               | Plain text                                                                                | `text/plain; charset=utf-8`       |
| `json`               | JSON format                                                                               | `application/json; charset=utf-8` |
| `xml`                | XML text                                                                                  | `text/xml; charset=utf-8`         |
| `bigfile`            | Used when retrieving data that is output to a file, such as search results as plain text. | `text/plain; charset=utf-8`       |
| `imagefile`          | Image data                                                                                | `image/png`                       |
| `requestfile`        | Used when retrieving data that is output to a file, such as search results as JSON text.  | `application/json; charset=utf-8` |


Note: If WABI cannot generate response data in the specified format,
then it is considered an invalid input value and returns an HTTP error
code.


### result：Result retrieval method <a name="parameter-result"></a>

The method for retrieving results can be specified from one of the
following:  
Note: Please use the help API [GET
/blast/help/{Help-Command}](#URI_GET_help) to reference the most
recently updated information.


| Retrieval Method | Explanation                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------- |
| `www`            | Submit a request to a URL for retrieving a result, and receive the result as the response data to the request. |
| `mail`          | Result is sent to the specified email address.                                                                 |



### address：Email address <a name="parameter-address"></a>

The email address to which the results will be sent.



### info：The type of job information being referenced <a name="parameter-info"></a>

The following types of information can be retrieved for a submitted
search job.  
Note: Please use the help API [GET
/blast/help/{Help-Command}](#URI_GET_help) to reference the most
up-to-date information.

|  Information Type  |  Explanation  |
| ---- | ---- |
| `status` | Job status |
| `result` | Search results |
| `request` | Search criteria specified when the job was submitted |

### imageId：The ID of the image associated with a search output <a name="parameter-imageId"></a>

This ID is used to retrieve the image data generated as part of a
search.

It is required for the following case:

  - [To retrieve the image data generated by a
    search.](#URI_GET_imageid)

Example ID for an image generated by search output:

```
1
```

## Other Information

Search results are retained for 7 days.  
(Refer to "Search result retention period" [「Request ID and BLAST
result」](/blast-help-e.html#result))  
You can [obtain the processed search result](#URI_GET_result) at any
time during this period by submitting a GET request specifying the
[Request ID](#parameter-Request-ID).


